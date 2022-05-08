import {actionCreators, authReducer, getAuthUserTC, initialState} from "./AuthReducer";
import {authAPI, CheckAuthDataType} from "../../api/authAPI";
import {CommonResponseType, ResultCode} from "../../api/api";
import {actionCreatorTest} from "../../types/ReducerTypes";

jest.mock("../../api/authAPI")

describe('tests for AuthReducer', () => {
  let state = initialState;
  describe('tests for actionCreator and authReducer', () => {
    test ("checking the return value action creator", () => {
      const action = actionCreators.setAuthUser(15, 'slava24kozlov', 'slava24kozlov@gmail.com', true)
      expect(action.type).toBe('SN/AUTH/SET-AUTH-USERS')
      expect(action.isAuth).toBe(true)
      expect(action.data.id).toBe(15)
      expect(action.data.login).toBe('slava24kozlov')
      expect(action.data.email).toBe('slava24kozlov@gmail.com')
    })
    test("checking the changed state", () => {
      const newState = authReducer(state, actionCreators.setAuthUser(15, 'slava24kozlov', 'slava24kozlov@gmail.com', true))
      expect(state).not.toBe(newState)
      expect(newState.id).toBe(15)
      expect(newState.login).toBe('slava24kozlov')
      expect(newState.email).toBe('slava24kozlov@gmail.com')
      expect(newState.isAuth).toBe(true)
      expect(newState.isFetching).toBe(false)
    })
    test("checking the reset state", () => {
      const action = actionCreators.setAuthUser(null, null, null, false)
      const newState = authReducer(state, action)
      expect(state).not.toBe(newState)
      expect(newState.id).toBeNull()
      expect(newState.login).toBeNull()
      expect(newState.email).toBeNull()
      expect(newState.isAuth).toBeFalsy()
      expect(newState.isFetching).toBeFalsy()
    })
    test("checking the use of a nonexistent action type", () => {
      const newState = authReducer(state, actionCreatorTest.actionCreator<string>('test'))
      expect(state).toEqual(newState)
    })
  })

  describe("tests for ThunkCreator", () => {
    const result: CommonResponseType<CheckAuthDataType> = {
      resultCode: ResultCode.success,
      messages: ['response message'],
      data: {
        id: 111,
        email: 'test thunk',
        login: 'test thunk'
      }
    }
    const authAPIMock = authAPI as jest.Mocked<typeof authAPI>
    const thunk = getAuthUserTC()
    const dispatchMock = jest.fn()
    const getState = jest.fn()

    afterEach(() => {
      dispatchMock.mockReset()
      getState.mockReset()
      authAPIMock.checkAuth.mockReset()
    })
    test("checking response with success result code", async () => {
      authAPIMock.checkAuth.mockResolvedValueOnce(result)
      await thunk(dispatchMock, getState, {})
      expect(dispatchMock).toBeCalledTimes(1)
      expect(authAPIMock.checkAuth).toBeCalledTimes(1)
      expect(dispatchMock).toBeCalledWith(actionCreators.setAuthUser(111, 'test thunk', 'test thunk', true))
    })
    test("checking response with error result code", async () => {
      result.resultCode = ResultCode.error
      authAPIMock.checkAuth.mockResolvedValueOnce(result)
      await thunk(dispatchMock, getState, {})
      expect(dispatchMock).toBeCalledTimes(1)
      expect(authAPIMock.checkAuth).toBeCalledTimes(1)
      expect(dispatchMock).toBeCalledWith(actionCreators.setAuthUser(null, null, null, false))
    })
  })
})


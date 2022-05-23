export const actionCreatorTest = {
  actionCreator: <T>(payload?: T) => ({
    type: "TEST-ACTION-TYPE-DEFAULT",
    payload
  } as const)
};

import ticketList from './../../src/reducers/ticket-list-reducer';
import constants from './../../src/constants';


describe("Ticket list reducer", () => {

  test("should return equivalent state if no action type is recognized", () => {
    expect(ticketList([], { type: null })).toEqual([]);
  });

  test("Imported value should match action type string", () => {
    expect(constants.ADD_TICKET).toEqual("Testing testing 1 2 3");
  })
});

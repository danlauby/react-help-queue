import ticketList from './../../src/reducers/ticket-list-reducer';
import c from './../../src/constants';


describe("Ticket list reducer", () => {
  let action;
  const ticketInfo = {
    names: [
      "Ryan",
      "Aimen"
    ],
    location: "4B",
    description: "Jest is being a diva and won't work well with webpack",
    timeOpened: 15000000,
    id: 0
  };

  test("Should add ticket to list array", () => {
      const { names, location, description, timeOpened, id } = ticketInfo;
      action = {
        type: c.ADD_TICKET,
        names: names,
        location: location,
        description: description,
        timeOpened: timeOpened,
        id: id
      };
      const futureState = [ ticketInfo ];
      expect(ticketList([], action)).toEqual([ ticketInfo ]);
  });

  test("should return equivalent state if no action type is recognized", () => {
    expect(ticketList([], { type: null })).toEqual([]);
  })
});

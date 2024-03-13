import moment from "moment/moment";

//* calendar Events *// 
let eventGuid = 0
let todayStr = moment().format("YYYY-MM-DD")
export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'Event 1',
    start: todayStr + 'T09:00:00',

  },
  {
    id: createEventId(),
    title: 'Event 1',
    start: moment(todayStr).add(1, "days").format("YYYY-MM-DD") + 'T16:00:00'
  },
  {
    id: createEventId(),
    title: "Event 1",
    start: moment(todayStr).add(2, "days").format("YYYY-MM-DD") + 'T20:00:00'
  },
  {
    id: createEventId(),
    title: "Event 1",
    start: moment(todayStr).add(3, "days").format("YYYY-MM-DD") + 'T09:00:00'
  },
  {
    id: createEventId(),
    title: "Event 1",
    start: moment(todayStr).add(5, "days").format("YYYY-MM-DD") + 'T13:00:00'
  },
  {
    id: createEventId(),
    title: "Event 1",
    start: moment(todayStr).add(6, "days").format("YYYY-MM-DD") + 'T13:00:00'
  },
]

export function createEventId() {
  return String(eventGuid++)
}
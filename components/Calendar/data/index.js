import moment from "moment/moment";

let eventGuid = 0
let todayStr = moment().format("YYYY-MM-DD")
export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'Meeting',
    start: todayStr + 'T09:00:00',

  },
  {
    id: createEventId(),
    title: 'Class',
    start: moment(todayStr).add(1, "days").format("YYYY-MM-DD") + 'T16:00:00'
  },
  {
    id: createEventId(),
    title: "Class",
    start: moment(todayStr).add(2, "days").format("YYYY-MM-DD") + 'T20:00:00'
  },
  {
    id: createEventId(),
    title: "Meeting",
    start: moment(todayStr).add(3, "days").format("YYYY-MM-DD") + 'T09:00:00'
  },
  {
    id: createEventId(),
    title: "Concert",
    start: moment(todayStr).add(5, "days").format("YYYY-MM-DD") + 'T20:00:00'
  },
  {
    id: createEventId(),
    title: "Hangout",
    start: moment(todayStr).add(6, "days").format("YYYY-MM-DD") + 'T13:00:00'
  },
]

export function createEventId() {
  return String(eventGuid++)
}
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
    title: 'Dinner with Friends',
    start: moment(todayStr).add(1, "days").format("YYYY-MM-DD") + 'T19:00:00'
  },
  {
    id: createEventId(),
    title: "Intensive",
    start: moment(todayStr).add(1, "days").format("YYYY-MM-DD") + 'T17:00:00'
  },
  {
    id: createEventId(),
    title: "Breakfast with Family",
    start: moment(todayStr).add(3, "days").format("YYYY-MM-DD") + 'T09:00:00'
  },
  {
    id: createEventId(),
    title: "Hangout with family.",
    start: moment(todayStr).add(5, "days").format("YYYY-MM-DD") + 'T20:00:00'
  },
  {
    id: createEventId(),
    title: "Class.",
    start: moment(todayStr).add(6, "days").format("YYYY-MM-DD") + 'T20:00:00'
  },
  {
    id: createEventId(),
    title: "Class",
    start: moment(todayStr).add(6, "days").format("YYYY-MM-DD") + 'T9:30:00'
  },
]

export function createEventId() {
  return String(eventGuid++)
}
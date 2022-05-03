import { times } from "./constants"

export const getAvailableTimes = () => {
  // Returns available delivery times based on current time of the day
  const currentHour = new Date().getHours()
  const currentMinute = new Date().getHours()
  // console.log(currentHour, currentMinute);
  
  const availableTimes = times.filter(t => {
    let tHours = 0
    console.log();
    if (t.includes('.')) {
      tHours = parseInt(t.slice(0, t.indexOf('.')))
    } else if (t.includes('am')) {
      tHours = parseInt(t.slice(0, t.indexOf('am')))
    } else if (t.includes('pm')) {
      tHours = parseInt(t.slice(0, t.indexOf('pm')))
    }
    const tMinutes = t.includes('.') ? 30 : 0
  //TODO: TBC    
  })
  return availableTimes
}
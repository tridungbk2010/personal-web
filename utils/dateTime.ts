import dayjs from 'dayjs';

export function displayDate(date:string){
  return dayjs(date).format("DD-MM-YYYY")
}
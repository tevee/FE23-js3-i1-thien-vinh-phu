export default function Clock({currentDate}) {

  const formattedTime = () => {
    const hours = currentDate.getHours().toString();
    const minutes = currentDate.getMinutes().toString();
    const seconds = currentDate.getSeconds().toString();

    return `${hours}:${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`;
  }
  
  return (
    <div>
      <h2>Current Time</h2>
      <h2>{formattedTime()}</h2>
    </div>
  )
}
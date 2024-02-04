import { useState } from "react"

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const StatisticLine = ({text, value, extraText = ''}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value} {extraText}</td>
    </tr>
  )
}

const Statistic = ({good, neutral, bad}) => {
  if (good + neutral + bad === 0) {
    return (
      <table>
        <thead>
          <tr>
            <td>
              <h1>Statistic</h1>
            </td>
          </tr>
        </thead>
      </table>
    )
  }

  const all = good + neutral + bad
  return (
    <table>
      <thead>
        <tr>
          <td>
            <h1>Statistic</h1>
          </td>
        </tr>
      </thead>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neurtal" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={all} />
        <StatisticLine text="average" value={(good * 1 + neutral * 0 + bad * -1) / all} />
        <StatisticLine text="positive" value={good / all * 100} extraText="%" />
      </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = () => setGood(good + 1)
  const addNeurtal = () => setNeutral(neutral + 1)
  const addBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={addGood} text="good" />
      <Button onClick={addNeurtal} text="neutral" />
      <Button onClick={addBad} text="bad" />
      <Statistic good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
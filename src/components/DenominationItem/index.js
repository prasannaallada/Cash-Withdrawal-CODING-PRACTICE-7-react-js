// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationDetails, updateBalance} = props
  const {value} = denominationDetails

  const onclickDenomination = () => {
    updateBalance(value)
  }

  return (
    <li className="denomination-item">
      <button
        className="denomination-button"
        type="button"
        onClick={onclickDenomination}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem

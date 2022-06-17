import React , {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import Transactions from './Transactions';

function TransactionList() {
    const {transactions}  = useContext(GlobalContext);
    // console.log(context);
  return (
    <>
        <h3>History</h3>
        <ul id = 'list' className='list'>
            {transactions.map((transaction)=>(
                <Transactions key={transaction.id} transaction={transaction}/>        
            ))}
            {/* <li className='minus'>
                Cash <span>-$400</span><button className='delete-btn'></button>
            </li> */}
        </ul>
    </>
  )
}

export default TransactionList
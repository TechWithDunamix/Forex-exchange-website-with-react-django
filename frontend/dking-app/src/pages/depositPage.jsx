import DashboardLayout from "../components/dashboard_layout";
import { useState } from "react";
import { toQueryString } from "@zayne-labs/callapi"
import {callMainApi} from '../utils.js'
import { message } from "antd";
const DepositPage = () => {
    const [amount,setAmount] = useState(0)
    const [errors,setErrors] = useState({})
    const [isLoading,setIsLoading] = useState(false)
    const handleDepositRequest = async () => {
        setIsLoading(true)
        const request = await callMainApi('/account/deposit',{
            method:'POST',
            body:toQueryString({"amount":amount})
          })
        if (!request.error){
            message.success("Your Deposit request has been sent !")
            setIsLoading(false)
            window.location.href = '/dashboard'
            return ;
        }
        message.error("An error occured")
        setIsLoading(false)
    }
    return (
        <DashboardLayout>
            <div className="min-h-full">
            <div className="border-2 rounded-xl py-5 px-4 w-auto">
                <div className='rounded-xl bg-green-200 p-2 '>
                    <div className='flex items-center'>
                    <p className='bg-green-900 text-slate-100 rounded-xl p-1'>
                        Your payement method 
                    </p>
                    <p className='px-3' style={{fontFamily:"Rubik"}}>{'Tether USD (TRC 200)   >'}</p>
                    </div>

                </div>
                    <input 
                    name='amount'
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className='p-3 mt-16 border-2 rounded-lg w-full w-[60%]' 
                    placeholder='Enter Amount'
                    />
                    <p className="text-slate-500 mt-32">You are to make payment ${amount} using one of the address below</p>

                    <hr />

                    <p className="text-slate-500 mt-12">Btc Wallet Address</p>
                    <p className="bg-slate-300 rounded-lg border-2 p-4 text-[0.6rem]">bhsgo78weuh7o3y83yhod8736y8h8wq93yhd893t</p>

                    <p className="text-slate-500 mt-12">USDT (TRC) 20 Wallet Address </p>
                    <p className="bg-slate-300 rounded-lg border-2 p-4 text-[0.6rem]">bhsgo78weuh7o3y83yhod8736y8h8wq93yhd893t</p>

                    <button 
                    onClick={handleDepositRequest}
                    className='cursor-pointer mt-10 hover:bg-green-600 bg-green-700 text-slate-200 p-2 rounded-lg drop-shadow-sm'>Complete Request </button>


            </div>
            </div>
        </DashboardLayout>
    )
}

export default DepositPage
import React, { useState, useEffect } from 'react';
import Image from '../assets/images/laptop.png';
import Image2 from '../assets/images/btc-image2.jfif';
import Layout from '../components/layouts.jsx';
import { message } from 'antd';
import { callMainApi } from '../utils';
import { KeyOutlined, SecurityScanOutlined, CreditCardOutlined, ThunderboltOutlined, AreaChartOutlined, CheckOutlined } from '@ant-design/icons';

const HomePage = () => {
  const [plans, setPlans] = useState([]);
  const isAuth = localStorage.getItem("token");

  useEffect(() => {
    fetchPlans();
  }, []);

  const fetchPlans = async () => {
    try {
      const response = await callMainApi('/plans');
      if (response.data) {
        setPlans(response.data);
      } else {
        message.error(response.error || 'Failed to fetch plans');
      }
    } catch (error) {
      console.error('Error fetching plans:', error);
      message.error('Error fetching plans');
    }
  };

  return (
    <Layout>
      <div className='min-h-[60vh] md:min-h-[60vh] flex flex-col md:flex-row items-center bg-slate-100 p-10'>
        <div className='flex flex-row md:min-h-[60vh] md:w-[60%] items-center md:pl-10'>
          <div>
            <p className='text-green-900 rounded-[29px] my-5 text-slate-500 border-2 border-slate-400 w-[300px] px-0 py-1 pl-2'>Trade, Invest, and Grow Your Wealth</p>
            <h1 className='text-[1.7rem] md:text-[2rem] md:w-[330px]' style={{ fontFamily: "Roboto" }}>
              The Better Way to Trade & Invest
            </h1>
            <p className='text-slate-800 font-light md:w-[580px] my-10 text-[1.7rem] animate-slide-fade'>
              EX-Change supports over 2 million clients in achieving their financial goals by simplifying cryptocurrency trading and investment processes.
            </p>
            <p className='animate-bounce-infinite animate-slide-right'>
              <a href={isAuth ? "/dashboard" : "/signup"} className='py-2 px-4 bg-green-600 text-white rounded-b-[5px] rounded-l-[5px]'>Start Now</a>
            </p>
          </div>
        </div>

        <div className='md:max-w-[40%] my-6 animate-slide-down'>
          <img src={Image2} className='rounded-l-[20px]' />
        </div>
      </div>

      <div className='bg-white mt-5'>
        <h1 className='text-[1.4rem] text-center md:text-[2.7rem] mt-20 mb-8' style={{ fontFamily: "Roboto" }}>We Prioritize Security!</h1>
        <div className='flex flex-col md:flex-row md:px-10 justify-center p-5'>
          <div className='text-center md:my-16 md:mx-10 border-l-2'>
            <KeyOutlined className='text-center text-[5rem] bg-green-200 p-4 rounded-[5px] text-green-600 mb-2' />
            <p className='text-slate-500 my-4 md:w-[400px]'>
              EX-Change employs top-tier Internet Security measures and 256-bit SSL encryption to guarantee your information is fully safeguarded against fraud.
            </p>
          </div>

          <div className='text-center md:my-16 md:mx-10 border-l-2'>
            <SecurityScanOutlined className='text-center text-[5rem] bg-green-200 p-4 rounded-[5px] text-green-600 mb-2' />
            <p className='text-slate-500 my-4 md:w-[400px] mt-5'>
              Your data's safety is our top priority. EX-Change uses the highest levels of Internet Security and 256-bit SSL encryption to keep your information completely protected.
            </p>
          </div>
        </div>
      </div>

      <div className='text-slate-500'>
        <h1 className='text-slate-700 text-center font-bold text-[1.4rem]'>Explore Our Services</h1>
        <p className='text-center text-slate-500 md:px-36 p-4'>Our goal is to provide a delightful and successful trading experience by offering top-notch support and a user-friendly platform. Your satisfaction and success are our top priorities.</p>
        <div className='flex flex-col md:flex-row items-center'>
          <div className='flex flex-col md:flex-row justify-center min-w-[60%]'>
            <div className='flex flex-col my-16'>
              <div className='flex my-10 border-l-2'>
                <div className='mx-3'>
                  <AreaChartOutlined className='text-[2rem] bg-green-200 p-2 rounded-r-[200px] rounded-t-[255px] text-green-900' />
                </div>
                <div>
                  <h1 className='text-black font-semibold'>Powerful Trading Platforms</h1>
                  <p className='w-[280px] text-slate-500 my-2 font-light'>EX-Change offers multiple platform options to cover the needs of each type of trader and investor.</p>
                </div>
              </div>

              <div>
                <div className='flex my-10 border-l-2'>
                  <div className='mx-3'>
                    <ThunderboltOutlined className='text-[2rem] bg-green-200 p-2 rounded-r-[200px] rounded-t-[255px] text-green-900' />
                  </div>
                  <div>
                    <h1 className='text-black font-semibold'>Lightning-Fast Transactions</h1>
                    <p className='w-[280px] text-slate-500 my-2 font-light'>Experience the speed and efficiency of our trading platform, designed for rapid and seamless transactions.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex flex-col md:my-16'>
              <div>
                <div className='flex my-10 border-l-2'>
                  <div className='mx-3'>
                    <CreditCardOutlined className='text-[2rem] bg-green-200 p-2 rounded-r-[200px] rounded-t-[255px] text-green-900' />
                  </div>
                  <div>
                    <h1 className='text-black font-semibold'>Secure Payment Methods</h1>
                    <p className='w-[280px] text-slate-500 my-2 font-light'>EX-Change provides secure and convenient payment options to ensure a smooth trading experience.</p>
                  </div>
                </div>
              </div>

              <div>
                <div className='flex my-10 border-l-2'>
                  <div className='mx-3'>
                    <SecurityScanOutlined className='text-[2rem] bg-green-200 p-2 rounded-r-[200px] rounded-t-[255px] text-green-900' />
                  </div>
                  <div>
                    <h1 className='text-black font-semibold'>Enhanced Security Features</h1>
                    <p className='w-[280px] text-slate-500 my-2 font-light'>Our platform is equipped with advanced security features to protect your investments at all times.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <img src={Image} />
          </div>
        </div>
      </div>

      <div className='flex flex-col p-2 justify-center items-center bg-white'>
        <div className='text-center'>
          <h1 className='text-[2rem] text-green-900' style={{ fontFamily: 'Roboto' }}>Our Investment Packages</h1>
          <p className='font-light text-slate-500'>Choose how you want to invest with us</p>
        </div>

        <div className='flex flex-col md:flex-row justify-center items-center'>
          {plans.map((plan) => (
            <div key={plan.id} className='shadow-md shadow-green-200 px-5 p-5 rounded-[5px] w-[300px] border-2 mx-5 my-2'>
              <h1 style={{ fontFamily: 'Roboto' }} className='text-green-900 bg-green-200 p-4 rounded-t-[45px] rounded-r-[45px]'>{plan.name}</h1>
              <h1 style={{ fontFamily: 'Roboto' }} className='text-black font-bold text-[2rem] my-2'>${plan.price}</h1>
              <p className='font-light text-slate-500 mb-2'>{plan.duration}</p>
              <hr />
              <div className='mb-20 text-slate-600'>
              {plan.features.map(f => {
                return <p><CheckOutlined />{f}</p>
              })}
              </div>
              <a href={`/buy-plan?id=${plan.id}&int=${plan.pir}&period=${plan.duration}&name=${plan.name}&amount=${plan.price}`} className='px-4 py-3 bg-green-600 text-white rounded-[5px]'>Buy Now</a>
            </div>
            
          ))}
        </div>
      </div>

      <div className='mx-8 md:mx-28 bg-green-800 text-white md:flex p-5 rounded-r-[5px] rounded-t-[5px]'>
        <div>
          <h1 style={{ fontFamily: 'Roboto' }} className='text-[2.2rem]'>The Better Way to Trade & Invest</h1>
          <p className='font-light md:w-[430px]'>EX-Change helps over 2 million customers achieve their financial goals by helping them trade all cryptocurrency and invest with ease...</p>
        </div>
        <div className='mx-5 md:mt-24 my-4'>
          <a className='px-4 py-3 text-green-600 bg-white rounded-[5px]'>Create a free Account</a>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;

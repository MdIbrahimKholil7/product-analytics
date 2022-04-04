import React, { useEffect, useState } from 'react';
import { LineChart, Line, AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area, Legend, ComposedChart, Bar, PieChart, Pie, BarChart } from 'recharts';
const Dashboard = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => {

                setData(data)
                console.log(data)
            })
    }, [])



    /* 
        const data = [
            { name: 'Page A', uv: 300, pv: 2400, amt: 2400 },
            { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
            { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
            { name: 'Page A', uv: 400, pv: 400, amt: 2400 },
            { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
            { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
            { name: 'Page A', uv: 400, pv: 240, amt: 2400 },
        ]; */
    return (
        <div className='mt-10 px-36'>
            <h1 className='text-5xl font-bold text-center mb-10'>Our Product Sells</h1>
            <section className='grid md:grid-cols-2 justify-center gap-20 mt-[7rem]'>
                {/* area chart  */}
                <div className='flex flex-col items-center justify-center md:pr-0'>
                    <h1 className='text-4xl text-cyan-900 mb-9 text-center'>Investment vs Revenue</h1>
                    <AreaChart data={data} width={350} height={250}
                        className='text-1xl w-[40rem] h-[23rem]'>
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Area type="monotone" dataKey="investment" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                        <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                    </AreaChart>
                </div>
                {/* line chart  */}
                <div>
                    <h1 className='text-4xl text-cyan-900 mb-9 text-center'>Investment vs Revenue</h1>
                    <LineChart width={350} height={250} data={data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="investment" stroke="#8884d8" />
                        <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
                    </LineChart>
                </div>
                {/* composed chart  */}
                <div>
                    <h1 className='text-4xl text-cyan-900 mb-9 text-center'>Investment vs Revenue</h1>
                    <BarChart width={350} height={250} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="investment" fill="#8884d8" />
                        <Bar dataKey="revenue" fill="#82ca9d" />
                    </BarChart>
                </div>
                {/* piechart  */}
                <div>
                    <h1 className='text-4xl text-cyan-900 mb-9 text-center'>Investment vs Revenue</h1>
                    <PieChart width={350} height={250}>
                        <Pie data={data} dataKey="investment" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                        <Pie data={data} dataKey="revenue" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                        <Tooltip />

                    </PieChart>
                </div>
            </section>
        </div>
    );
};

export default Dashboard;
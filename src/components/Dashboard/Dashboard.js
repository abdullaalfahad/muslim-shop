import React from 'react';
import { Col, Row, Tooltip } from 'react-bootstrap';
import { Area, AreaChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import useReview from '../../hooks/useReview';

const Dashboard = () => {
    const [data, setData] = useReview('data.json');
    const { month, investment, revenue, sell } = data;
    return (
        <div className='container mt-5'>
            <Row lg={2} xs={1} className="g-5">
                <Col>
                    <LineChart width={500} height={500} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <Line type="monotone"
                            dataKey={'investment'}
                            stroke="#8884d8"></Line>
                        <XAxis dataKey={"month"} />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="sell" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
                    </LineChart>
                </Col>
                <Col>
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="sell" stroke="#8884d8" activeDot={{ r: 8 }} />
                            <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
                        </LineChart>
                    </ResponsiveContainer>
                </Col>
                <Col>
                    <AreaChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="investment" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </Col>
                <Col>
                    <PieChart width={400} height={400}>
                        <Pie
                            dataKey="investment"
                            startAngle={180}
                            endAngle={0}
                            data={data}
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            fill="#8884d8"
                            label
                        />
                    </PieChart>
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;
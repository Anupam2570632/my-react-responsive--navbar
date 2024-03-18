import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar } from 'recharts';

const Fig = () => {
    const students = [
        {
            "name": "Alice",
            "physics": 85,
            "chemistry": 75,
            "math": 90
        },
        {
            "name": "Bob",
            "physics": 78,
            "chemistry": 82,
            "math": 88
        },
        {
            "name": "Charlie",
            "physics": 90,
            "chemistry": 80,
            "math": 85
        },
        {
            "name": "David",
            "physics": 92,
            "chemistry": 88,
            "math": 95
        },
        {
            "name": "Eva",
            "physics": 80,
            "chemistry": 72,
            "math": 85
        },
        {
            "name": "Frank",
            "physics": 85,
            "chemistry": 90,
            "math": 80
        },
        {
            "name": "Grace",
            "physics": 75,
            "chemistry": 85,
            "math": 92
        },
        {
            "name": "Hannah",
            "physics": 88,
            "chemistry": 78,
            "math": 84
        },
        {
            "name": "Ian",
            "physics": 82,
            "chemistry": 92,
            "math": 87
        },
        {
            "name": "Julia",
            "physics": 90,
            "chemistry": 85,
            "math": 80
        }
    ];
    return (
        <div className='p-10 space-y-10 mx-auto w-full text-center flex flex-col items-center justify-center'>
            <LineChart height={400} width={600} data={students}>
                <Line type={'monotone'} dataKey={'physics'} stroke='red'></Line>
                <Line type={'monotone'} dataKey={'chemistry'} stroke='green'>yellow</Line>
                <Line type={'monotone'} dataKey={'math'} stroke='blue'></Line>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />

                <Tooltip></Tooltip>
            </LineChart>
            <BarChart height={400} width={700} data={students}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Bar dataKey="physics" fill="skyblue" />
                <Bar dataKey="chemistry" fill="purple" />
                <Bar dataKey="math" fill="gray" />

            </BarChart>
        </div>
    );
};

export default Fig;
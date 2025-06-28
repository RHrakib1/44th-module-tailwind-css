import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
// import { BarChart, Bar, XAxis, YAxis } from 'recharts';
const LineChartadd = () => {

    const students = [
        {
            "id": 1,
            "name": "Alice",
            "math": 85,
            "bangla": 75,
            "english": 80
        },
        {
            "id": 2,
            "name": "Bob",
            "math": 78,
            "bangla": 82,
            "english": 85
        },
        {
            "id": 3,
            "name": "Charlie",
            "math": 90,
            "bangla": 88,
            "english": 92
        },
        {
            "id": 4,
            "name": "David",
            "math": 70,
            "bangla": 65,
            "english": 72
        },
        {
            "id": 5,
            "name": "Emma",
            "math": 92,
            "bangla": 85,
            "english": 88
        },
        {
            "id": 6,
            "name": "Frank",
            "math": 84,
            "bangla": 78,
            "english": 80
        },
        {
            "id": 7,
            "name": "Grace",
            "math": 88,
            "bangla": 92,
            "english": 90
        },
        {
            "id": 8,
            "name": "Henry",
            "math": 76,
            "bangla": 80,
            "english": 78
        },
        {
            "id": 9,
            "name": "Ivy",
            "math": 95,
            "bangla": 90,
            "english": 92
        },
        {
            "id": 10,
            "name": "Jack",
            "math": 82,
            "bangla": 85,
            "english": 88
        }
    ]

    return (
        <div>
            {/* grap chart korar niyom */}
            <LineChart width={500} height={500} data={students}>
                <Line type="monotone" dataKey="math" stroke='blue'></Line>
                <Line type="monotone" dataKey="bangla" stroke='red'></Line>
                <Line type="monotone" dataKey="english" stroke='black'></Line>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>
            {/* <div>
                <BarChart width={1200} height={800} data={students} >
                    <Bar dataKey="math"></Bar>
                    <XAxis dataKey="name" />
                    <YAxis />
                </BarChart>
            </div> */}
        </div>

    );
};

export default LineChartadd;

// axios use krle fetch er j json krte hoi data k seta krte hoi na

// react awesome component er modhe onek kisu ase use korar jonne 
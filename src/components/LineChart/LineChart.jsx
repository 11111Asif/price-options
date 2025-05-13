import { LineChart as LChart, Line, YAxis, XAxis } from 'recharts';

const LineChart = () => {
    const mathMarksData = [
        { "id": 1, "name": "Alice", "math": 88, "physics": 85, "chemistry": 82 },
        { "id": 2, "name": "Bob", "math": 74, "physics": 70, "chemistry": 72 },
        { "id": 3, "name": "Charlie", "math": 95, "physics": 93, "chemistry": 91 },
        { "id": 4, "name": "David", "math": 73, "physics": 75, "chemistry": 70 },
        { "id": 5, "name": "Ella", "math": 91, "physics": 89, "chemistry": 90 },
        { "id": 6, "name": "Farhan", "math": 67, "physics": 65, "chemistry": 68 },
        { "id": 7, "name": "Grace", "math": 98, "physics": 96, "chemistry": 95 },
        { "id": 8, "name": "Hassan", "math": 87, "physics": 84, "chemistry": 86 },
        { "id": 9, "name": "Ivy", "math": 80, "physics": 78, "chemistry": 79 },
        { "id": 10, "name": "Jack", "math": 72, "physics": 70, "chemistry": 71 }
      ]
      
      
    return (
        <div>
            <LChart width={800} height={400} data={mathMarksData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Line dataKey={"math"} stroke='#8884d8'></Line>
                <Line dataKey={"physics"} stroke='yellow'></Line>
                <Line dataKey={"chemistry"} stroke='red'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;
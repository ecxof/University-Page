import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { grade: "A", count: 3456, percentage: 27.7 },
  { grade: "B", count: 4123, percentage: 33.1 },
  { grade: "C", count: 2890, percentage: 23.2 },
  { grade: "D", count: 1234, percentage: 9.9 },
  { grade: "F", count: 755, percentage: 6.1 },
];

export function GradeDistribution() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Grade Distribution - Fall 2024</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="grade" stroke="#64748b" />
            <YAxis stroke="#64748b" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
              }}
            />
            <Legend />
            <Bar dataKey="count" fill="#3b82f6" name="Number of Students" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

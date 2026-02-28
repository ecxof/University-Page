import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

const data = [
  { name: "Engineering", value: 3245, color: "#3b82f6" },
  { name: "Business", value: 2856, color: "#8b5cf6" },
  { name: "Arts & Sciences", value: 2345, color: "#10b981" },
  { name: "Medicine", value: 1678, color: "#f59e0b" },
  { name: "Law", value: 1234, color: "#ef4444" },
  { name: "Education", value: 1100, color: "#ec4899" },
];

export function DepartmentBreakdown() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Students by Department</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

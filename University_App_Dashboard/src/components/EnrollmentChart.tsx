import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { month: "Jan", undergraduate: 8200, graduate: 3100, total: 11300 },
  { month: "Feb", undergraduate: 8350, graduate: 3150, total: 11500 },
  { month: "Mar", undergraduate: 8400, graduate: 3200, total: 11600 },
  { month: "Apr", undergraduate: 8500, graduate: 3250, total: 11750 },
  { month: "May", undergraduate: 8600, graduate: 3300, total: 11900 },
  { month: "Jun", undergraduate: 8700, graduate: 3400, total: 12100 },
  { month: "Jul", undergraduate: 8750, graduate: 3450, total: 12200 },
  { month: "Aug", undergraduate: 8850, graduate: 3508, total: 12358 },
  { month: "Sep", undergraduate: 8900, graduate: 3558, total: 12458 },
];

export function EnrollmentChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Student Enrollment Trend</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="month" stroke="#64748b" />
            <YAxis stroke="#64748b" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
              }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="undergraduate"
              stroke="#3b82f6"
              strokeWidth={2}
              name="Undergraduate"
            />
            <Line
              type="monotone"
              dataKey="graduate"
              stroke="#8b5cf6"
              strokeWidth={2}
              name="Graduate"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

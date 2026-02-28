import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Badge } from "./ui/badge";

const courses = [
  {
    id: "CS101",
    name: "Introduction to Programming",
    instructor: "Dr. Sarah Johnson",
    enrolled: 245,
    capacity: 250,
    status: "Open",
  },
  {
    id: "MATH201",
    name: "Calculus II",
    instructor: "Prof. Michael Chen",
    enrolled: 180,
    capacity: 180,
    status: "Full",
  },
  {
    id: "ENG102",
    name: "English Composition",
    instructor: "Dr. Emily Brown",
    enrolled: 156,
    capacity: 200,
    status: "Open",
  },
  {
    id: "BIO301",
    name: "Molecular Biology",
    instructor: "Dr. James Wilson",
    enrolled: 98,
    capacity: 100,
    status: "Open",
  },
  {
    id: "PHYS205",
    name: "Quantum Mechanics",
    instructor: "Prof. Lisa Anderson",
    enrolled: 75,
    capacity: 75,
    status: "Full",
  },
];

export function CourseTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Popular Courses</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Course ID</TableHead>
              <TableHead>Course Name</TableHead>
              <TableHead>Instructor</TableHead>
              <TableHead>Enrollment</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {courses.map((course) => (
              <TableRow key={course.id}>
                <TableCell>{course.id}</TableCell>
                <TableCell>{course.name}</TableCell>
                <TableCell className="text-slate-600">{course.instructor}</TableCell>
                <TableCell>
                  {course.enrolled}/{course.capacity}
                </TableCell>
                <TableCell>
                  <Badge
                    variant={course.status === "Open" ? "default" : "secondary"}
                  >
                    {course.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

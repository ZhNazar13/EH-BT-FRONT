import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  time: string;
  dayOfWeek: string;
  lesson: string;
  teacher: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {dayOfWeek: 'Понедельник', time: '09:00', lesson: 'Казахский язык', teacher: 'Батырбекова Молдир'},
  {dayOfWeek: 'Вторник', time: '09:00', lesson: 'Алгебра', teacher: 'Бисекенов Бауыржан'},
  {dayOfWeek: 'Среда', time: '09:00', lesson: 'Химия', teacher: 'Сералин Галымжан'},
  {dayOfWeek: 'Четверг', time: '09:00', lesson: 'Физика', teacher: 'Ташев Нурлыбек'},
  {dayOfWeek: 'Пятница', time: '09:00', lesson: 'Геометрия', teacher: 'Исахов Алибек'},
  {dayOfWeek: 'Суббота', time: '09:00', lesson: 'Информатика', teacher: 'Байтабынов Дархан'},
];
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  displayedColumns: string[] = ['dayOfWeek', 'time', 'lesson', 'teacher', 'actions'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}

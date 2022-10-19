import { Box } from '@chakra-ui/react';
import { Eventcalendar } from '@mobiscroll/react';
// import '@mobiscroll/react/dist/css/mobiscroll.scss';
import '../styles/mainarea.scss';
import React from 'react';

const now = new Date();
const myEvents = [
  {
    start: '2022-10-08T09:00',
    end: '2022-10-11T18:00',
    title: 'TASK1',
    description: 'AUDITORIUM',
    resource: 2,
  },
  {
    start: '2022-10-08T13:00',
    end: '2022-10-09T21:00',
    title: 'TASK2',
    resource: 4,
  },
  {
    start: '2022-10-15T13:00',
    end: '2022-10-16T21:00',
    title: 'TASK3',
    resource: 1,
  },
  {
    start: '2022-10-08T08:00',
    end: '2022-10-08T10:00',
    title: 'TASK4.',
    resource: 5,
  },
  {
    start: '2022-10-20T07:00',
    end: '2022-10-20T10:00',
    title: 'TASK5',
    resource: 2,
  },
  {
    start: '2022-10-20T10:30',
    end: '2022-10-20T13:00',
    title: 'TASK6',
    resource: 2,
  },
  {
    start: '2022-10-20T09:30',
    end: '2022-10-20T12:00',
    title: 'TASK7',
    resource: 6,
  },
  {
    start: '2022-10-20T11:00',
    end: '2022-10-20T11:30',
    title: 'TASK8',
    resource: 7,
  },
  {
    start: '2022-10-08T13:00',
    end: '2022-10-08T14:30',
    title: 'TASK9',
    resource: 2,
  },
  {
    start: '2022-10-08T15:00',
    end: '2022-10-08T17:00',
    title: 'TASK1',
    resource: 4,
  },
  {
    recurring: {
      repeat: 'yearly',
      month: now.getMonth() + 1,
      day: 14,
    },
    allDay: true,
    title: 'TASK2',
    resource: 2,
  },
  {
    recurring: {
      repeat: 'yearly',
      month: now.getMonth() + 1,
      day: 25,
    },
    allDay: true,
    title: 'TASK3',
    resource: 2,
  },
  {
    recurring: {
      repeat: 'weekly',
      weekDays: 'WE',
    },
    // start: '2022-10-21T15:00',
    // end: '2022-10-21T17:00',
    allDay: true,
    title: 'TASK4',
    resource: [3],
  },
  {
    // start: '2022-10-10T00:00',
    // end: '2022-10-15T00:00',
    allDay: true,
    title: 'TASK0',
    resource: 4,
  },
  {
    start: '2022-10-18T00:00',
    end: '2022-10-29T00:00',
    allDay: true,
    title: 'TASK',
    resource: [1, 4, 5],
  },
  {
    start: '2022-02-07T00:00',
    end: '2022-02-25T00:00',
    allDay: true,
    title: 'TASK',
    resource: 5,
  },
  {
    start: '2022-03-05T00:00',
    end: '2022-03-14T00:00',
    allDay: true,
    title: 'TASK',
    resource: 2,
  },
  {
    start: '2022-05-07T00:00',
    end: '2022-05-16T00:00',
    allDay: true,
    title: 'TASK',
    resource: 4,
  },
  {
    start: '2022-06-01T00:00',
    end: '2022-06-11T00:00',
    allDay: true,
    title: 'TASK',
    resource: 1,
  },
  {
    start: '2022-07-02T00:00',
    end: '2022-07-17T00:00',
    allDay: true,
    title: 'TASK',
    resource: 5,
  },
  {
    start: '2022-08-06T00:00',
    end: '2022-08-14T00:00',
    allDay: true,
    title: 'TASK',
    resource: 3,
  },
  {
    start: '2022-09-10T00:00',
    end: '2022-09-20T00:00',
    allDay: true,
    title: 'TASK',
    resource: 2,
  },
  {
    start: '2022-10-01T00:00',
    end: '2022-10-12T00:00',
    allDay: true,
    title: 'TASK',
    resource: 3,
  },
  {
    recurring: {
      repeat: 'yearly',
      month: 12,
      day: 25,
    },
    allDay: true,
    title: 'Christmas Day',
    resource: [1, 2, 3, 4, 5],
  },
  {
    recurring: {
      repeat: 'yearly',
      month: 1,
      day: 1,
    },
    allDay: true,
    title: "New Year's day",
    resource: [1, 2, 3, 4, 5],
  },
  {
    recurring: {
      repeat: 'yearly',
      month: 4,
      day: 1,
    },
    allDay: true,
    title: "April Fool's Day",
    resource: [1, 2, 3, 4, 5],
  },
  {
    recurring: {
      repeat: 'yearly',
      month: 11,
      day: 2,
    },
    allDay: true,
    title: 'File Form 720 for the third quarter',
    resource: 5,
  },
  {
    recurring: {
      repeat: 'yearly',
      month: 11,
      day: 2,
    },
    allDay: true,
    title: 'File Form 730 and pay tax on wagers accepted during September',
    resource: 1,
  },
  {
    recurring: {
      repeat: 'yearly',
      month: 11,
      day: 2,
    },
    allDay: true,
    title:
      'File Form 2290 and pay the tax for vehicles first used during September',
    resource: 5,
  },
  {
    recurring: {
      repeat: 'yearly',
      month: 11,
      day: 2,
    },
    allDay: true,
    title: 'File Form 941 for the third quarter',
    resource: 2,
  },
  {
    recurring: {
      repeat: 'yearly',
      month: 11,
      day: 2,
    },
    allDay: true,
    title: 'Deposit FUTA owed through Sep if more than $500',
    resource: 14,
  },
  {
    recurring: {
      repeat: 'yearly',
      month: 11,
      day: 30,
    },
    allDay: true,
    title:
      'Deposit payroll tax for payments on Nov 21-24 if the semiweekly deposit rule applies',
    resource: 2,
  },
  {
    recurring: {
      repeat: 'yearly',
      month: 11,
      day: 30,
    },
    allDay: true,
    title: 'File Form 730 and pay tax on wagers accepted during October',
    resource: 5,
  },
  {
    recurring: {
      repeat: 'yearly',
      month: 11,
      day: 30,
    },
    allDay: true,
    title:
      'File Form 2290 and pay the tax for vehicles first used during October',
    resource: 4,
  },
];
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const myResources = [
  {
    id: 1,
    name: `${days[now.getDay()].substring(0, 3) + ' ' + now.getDate()}`,
    color: '#fdf500',
  },
  {
    id: 2,
    name: `${
      days[(1 + now.getDay()) % 7].substring(0, 3) + ' ' + (1 + now.getDate())
    }`,
    color: '#ff0101',
  },
  {
    id: 3,
    name: `${
      days[(2 + now.getDay()) % 7].substring(0, 3) + ' ' + (2 + now.getDate())
    }`,
    color: '#01adff',
  },
  {
    id: 4,
    name: `${
      days[(3 + now.getDay()) % 7].substring(0, 3) + ' ' + (3 + now.getDate())
    }`,
    color: '#239a21',
  },
  {
    id: 5,
    name: `${
      days[(4 + now.getDay()) % 7].substring(0, 3) + ' ' + (4 + now.getDate())
    }`,
    color: '#ff4600',
  },
  {
    id: 6,
    name: `${
      days[(5 + now.getDay()) % 7].substring(0, 3) + ' ' + (4 + now.getDate())
    }`,
    color: '#ff4600',
  },
  {
    id: 7,
    name: `${
      days[(6 + now.getDay()) % 7].substring(0, 3) + ' ' + (4 + now.getDate())
    }`,
    color: '#ff4600',
  },
];

// const myResources = [
//   {
//     id: now.getDate(),
//     name: `${days[now.getDay()].substring(0, 3) + ' ' + now.getDate()}`,
//     bg: '#fdf500',
//   },
//   {
//     id: 1 + now.getDate(),
//     name: `${
//       days[(1 + now.getDay()) % 7].substring(0, 3) + ' ' + (1 + now.getDate())
//     }`,
//     color: '#ff0101',
//   },
//   {
//     id: 2 + now.getDate(),
//     name: `${
//       days[(2 + now.getDay()) % 7].substring(0, 3) + ' ' + (2 + now.getDate())
//     }`,
//     color: '#01adff',
//   },
//   {
//     id: 3 + now.getDate(),
//     name: `${
//       days[(3 + now.getDay()) % 7].substring(0, 3) + ' ' + (3 + now.getDate())
//     }`,
//     color: '#239a21',
//   },
//   {
//     id: 4 + now.getDate(),
//     name: `${
//       days[(4 + now.getDay()) % 7].substring(0, 3) + ' ' + (4 + now.getDate())
//     }`,
//     color: '#ff4600',
//   },
//   {
//     id: 5 + now.getDate(),
//     name: `${
//       days[(5 + now.getDay()) % 7].substring(0, 3) + ' ' + (5 + now.getDate())
//     }`,
//     color: '#ff4600',
//   },
//   {
//     id: 6 + now.getDate(),
//     name: `${
//       days[(6 + now.getDay()) % 7].substring(0, 3) + ' ' + (6 + now.getDate())
//     }`,
//     color: '#ff4600',
//   },
// ];

const Scheduler = () => {
  const view = React.useMemo(() => {
    return {
      timeline: { type: 'day' },
    };
  }, []);
  return (
    <Box
      bg="#FFFFFF"
      //   position="absolute"
      // //   h="609px"
      //   top="112px"
      //   left="137px"
      //   borderRadius="5px"
      //   w="1212px"
    >
      <Eventcalendar
        theme="ios"
        themeVariant="light"
        data={myEvents}
        view={view}
        resources={myResources}
      />
    </Box>
  );
};

export default Scheduler;

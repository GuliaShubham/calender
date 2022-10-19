import { Box, filter } from '@chakra-ui/react';
import { Eventcalendar } from '@mobiscroll/react';
import '../styles/mainarea.scss';
import React from 'react';
import axios from 'axios';
import moment from 'moment';

const now = new Date();

const exampleEvents = [
  {
    id: '8eebc064-de75-4dce-9dd3-c69459a4d450',
    date: 'Sat Oct 08 2022',
    scheduled: [
      {
        id: 'd2439576-abef-44fc-b310-04f98b37a6ec',
        title: 'Physics',
        location: 'B-302',
        subtitle: 'Michael Corleone',
        start_time: '8:30 AM',
        end_time: '10:00 AM',
        type: 'class',
        color: '#6F6CA2',
      },
      {
        id: 'e2439576-abef-44fc-b310-04f98b37a6ec',
        title: 'Chemistry',
        location: 'B-301',
        subtitle: 'Michael Morone',
        start_time: '9:30 PM',
        end_time: '11:00 PM',
        type: 'class',
        color: '#FF0000',
      },
      {
        id: 'e2439576-abef-44fc-b310-04f90b37a6ec',
        title: 'Maths',
        location: 'C-301',
        subtitle: 'Jack Morone',
        start_time: '7:30 AM',
        end_time: '10:00 AM',
        type: 'class',
        color: '#00A0B0',
      },
    ],
  },
  {
    id: '0eebc064-de75-4dce-9dd3-c66459a4d450',
    date: 'Sat Oct 08 2022',
    scheduled: [
      {
        id: 'd1439576-abef-44fc-b310-04f98b37a6ec',
        title: 'Physics',
        location: 'B-302',
        subtitle: 'Michael Corleone',
        start_time: '5:30 PM',
        end_time: '7:00 PM',
        type: 'class',
        color: '#6F6CE5',
      },
      {
        id: 'e2539576-abef-44fc-b310-04h98b37a6ec',
        title: 'Computer Science',
        location: 'B-301',
        subtitle: 'Michael Morone',
        start_time: '7:30 PM',
        end_time: '9:00 PM',
        type: 'class',
        color: '#000000',
      },
    ],
  },
];

const myEvents = [
  {
    start: '2022-10-08T09:00',
    end: '2022-10-11T18:00',
    title: 'Business of Software Conference',
    resource: 2,
  },
  {
    start: '2022-10-08T13:00',
    end: '2022-10-09T21:00',
    title: 'Friends binge marathon',
    resource: 4,
  },
  // {
  //   start: '2022-10-15T13:00',
  //   end: '2022-10-16T21:00',
  //   title: 'Friends binge marathon',
  //   resource: 1,
  // },
  // {
  //   start: '2022-10-08T08:00',
  //   end: '2022-10-08T10:00',
  //   title: 'Product team mtg.',
  //   resource: 5,
  // },
  // {
  //   start: '2022-10-09T07:00',
  //   end: '2022-10-09T08:00',
  //   title: 'Green box to post office',
  //   resource: 5,
  // },
  // {
  //   start: '2022-10-07T08:30',
  //   end: '2022-10-07T10:00',
  //   title: 'Quick mtg. with Martin',
  //   resource: 2,
  // },
  // {
  //   start: '2022-10-08T09:30',
  //   end: '2022-10-08T12:00',
  //   title: 'Product team mtg.',
  //   resource: 4,
  // },
  // {
  //   start: '2022-10-08T11:00',
  //   end: '2022-10-08T12:30',
  //   title: 'Stakeholder mtg.',
  //   resource: 2,
  // },
  // {
  //   start: '2022-10-08T13:00',
  //   end: '2022-10-08T14:30',
  //   title: "Lunch @ Butcher's",
  //   resource: 2,
  // },
  // {
  //   start: '2022-10-08T15:00',
  //   end: '2022-10-08T17:00',
  //   title: 'General orientation',
  //   resource: 4,
  // },
  // {
  //   recurring: {
  //     repeat: 'yearly',
  //     month: now.getMonth() + 1,
  //     day: 14,
  //   },
  //   allDay: true,
  //   title: 'Dexter BD',
  //   resource: 2,
  // },
  // {
  //   recurring: {
  //     repeat: 'yearly',
  //     month: now.getMonth() + 1,
  //     day: 25,
  //   },
  //   allDay: true,
  //   title: 'Luke BD',
  //   resource: 2,
  // },
  // {
  //   recurring: {
  //     repeat: 'weekly',
  //     weekDays: 'WE',
  //   },
  //   allDay: true,
  //   title: 'Employment (Semi-weekly)',
  //   resource: [1, 3],
  // },
  // {
  //   start: '2022-10-10T00:00',
  //   end: '2022-10-15T00:00',
  //   allDay: true,
  //   title: 'Sam OFF',
  //   resource: 4,
  // },
  // {
  //   start: '2022-10-18T00:00',
  //   end: '2022-10-29T00:00',
  //   allDay: true,
  //   title: 'Europe tour',
  //   resource: [1, 4, 5],
  // },
  // {
  //   start: '2022-02-07T00:00',
  //   end: '2022-02-25T00:00',
  //   allDay: true,
  //   title: 'Dean OFF',
  //   resource: 5,
  // },
  // {
  //   start: '2022-03-05T00:00',
  //   end: '2022-03-14T00:00',
  //   allDay: true,
  //   title: 'Mike OFF',
  //   resource: 2,
  // },
  // {
  //   start: '2022-05-07T00:00',
  //   end: '2022-05-16T00:00',
  //   allDay: true,
  //   title: 'John OFF',
  //   resource: 4,
  // },
  // {
  //   start: '2022-06-01T00:00',
  //   end: '2022-06-11T00:00',
  //   allDay: true,
  //   title: 'Carol OFF',
  //   resource: 1,
  // },
  // {
  //   start: '2022-07-02T00:00',
  //   end: '2022-07-17T00:00',
  //   allDay: true,
  //   title: 'Jason OFF',
  //   resource: 5,
  // },
  // {
  //   start: '2022-08-06T00:00',
  //   end: '2022-08-14T00:00',
  //   allDay: true,
  //   title: 'Ashley OFF',
  //   resource: 3,
  // },
  // {
  //   start: '2022-09-10T00:00',
  //   end: '2022-09-20T00:00',
  //   allDay: true,
  //   title: 'Marisol OFF',
  //   resource: 2,
  // },
  // {
  //   start: '2022-10-01T00:00',
  //   end: '2022-10-12T00:00',
  //   allDay: true,
  //   title: 'Sharon OFF',
  //   resource: 3,
  // },
  // {
  //   recurring: {
  //     repeat: 'yearly',
  //     month: 12,
  //     day: 25,
  //   },
  //   allDay: true,
  //   title: 'Christmas Day',
  //   resource: [1, 2, 3, 4, 5],
  // },
  // {
  //   recurring: {
  //     repeat: 'yearly',
  //     month: 1,
  //     day: 1,
  //   },
  //   allDay: true,
  //   title: "New Year's day",
  //   resource: [1, 2, 3, 4, 5],
  // },
  // {
  //   recurring: {
  //     repeat: 'yearly',
  //     month: 4,
  //     day: 1,
  //   },
  //   allDay: true,
  //   title: "April Fool's Day",
  //   resource: [1, 2, 3, 4, 5],
  // },
  // {
  //   recurring: {
  //     repeat: 'yearly',
  //     month: 11,
  //     day: 2,
  //   },
  //   allDay: true,
  //   title: 'File Form 720 for the third quarter',
  //   resource: 5,
  // },
  // {
  //   recurring: {
  //     repeat: 'yearly',
  //     month: 11,
  //     day: 2,
  //   },
  //   allDay: true,
  //   title: 'File Form 730 and pay tax on wagers accepted during September',
  //   resource: 1,
  // },
  // {
  //   recurring: {
  //     repeat: 'yearly',
  //     month: 11,
  //     day: 2,
  //   },
  //   allDay: true,
  //   title:
  //     'File Form 2290 and pay the tax for vehicles first used during September',
  //   resource: 5,
  // },
  // {
  //   recurring: {
  //     repeat: 'yearly',
  //     month: 11,
  //     day: 2,
  //   },
  //   allDay: true,
  //   title: 'File Form 941 for the third quarter',
  //   resource: 2,
  // },
  // {
  //   recurring: {
  //     repeat: 'yearly',
  //     month: 11,
  //     day: 2,
  //   },
  //   allDay: true,
  //   title: 'Deposit FUTA owed through Sep if more than $500',
  //   resource: 14,
  // },
  // {
  //   recurring: {
  //     repeat: 'yearly',
  //     month: 11,
  //     day: 30,
  //   },
  //   allDay: true,
  //   title:
  //     'Deposit payroll tax for payments on Nov 21-24 if the semiweekly deposit rule applies',
  //   resource: 2,
  // },
  // {
  //   recurring: {
  //     repeat: 'yearly',
  //     month: 11,
  //     day: 30,
  //   },
  //   allDay: true,
  //   title: 'File Form 730 and pay tax on wagers accepted during October',
  //   resource: 5,
  // },
  // {
  //   recurring: {
  //     repeat: 'yearly',
  //     month: 11,
  //     day: 30,
  //   },
  //   allDay: true,
  //   title:
  //     'File Form 2290 and pay the tax for vehicles first used during October',
  //   resource: 4,
  // },
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
    id: now.getDate(),
    name: `${days[now.getDay()].substring(0, 3) + ' ' + now.getDate()}`,
    bg: '#fdf500',
  },
  {
    id: 1 + now.getDate(),
    name: `${
      days[(1 + now.getDay()) % 7].substring(0, 3) + ' ' + (1 + now.getDate())
    }`,
    color: '#ff0101',
  },
  {
    id: 2 + now.getDate(),
    name: `${
      days[(2 + now.getDay()) % 7].substring(0, 3) + ' ' + (2 + now.getDate())
    }`,
    color: '#01adff',
  },
  {
    id: 3 + now.getDate(),
    name: `${
      days[(3 + now.getDay()) % 7].substring(0, 3) + ' ' + (3 + now.getDate())
    }`,
    color: '#239a21',
  },
  {
    id: 4 + now.getDate(),
    name: `${
      days[(4 + now.getDay()) % 7].substring(0, 3) + ' ' + (4 + now.getDate())
    }`,
    color: '#ff4600',
  },
  {
    id: 5 + now.getDate(),
    name: `${
      days[(5 + now.getDay()) % 7].substring(0, 3) + ' ' + (5 + now.getDate())
    }`,
    color: '#ff4600',
  },
  {
    id: 6 + now.getDate(),
    name: `${
      days[(6 + now.getDay()) % 7].substring(0, 3) + ' ' + (6 + now.getDate())
    }`,
    color: '#ff4600',
  },
];

const MainArea = () => {
  const [schedule, setSchedule] = React.useState(null);

  React.useEffect(() => {
    // axios.get('http://slackround.api.edvora.me').then(response => {
    //   console.log(response.data);

    //   setSchedule(response.data);
    // });
    const filteredEvents = [];
    exampleEvents.map(event => {
      event.scheduled.map(data => {
        let startDate = moment(
          event.date + ' ' + data.start_time,
          'ddd MMM DD YYYY LT'
        );
        let endDate = moment(
          event.date + ' ' + data.end_time,
          'ddd MMM DD YYYY LT'
        ).format('YYYY-MM-DDTHH:mm');
        // day month date year time
        console.log(startDate, endDate);
        // console.log(startDate.substring(8, 10));
        const obj = {
          id: data.id,
          // start: '2022-10-08T09:00',
          // end: '2022-10-08T18:00',
          // title: 'Business of Software Conference',
          resource: startDate.date(),
          start: startDate.format('YYYY-MM-DDTHH:mm'),
          end: endDate,
          title: data.title,
          color: data.color,
          description: data.subtitle + ' ' + data.type,
          location: data.location,
        };

        filteredEvents.push(obj);
      });
    });
    console.log(filteredEvents);
    setSchedule(filteredEvents);
  }, []);

  const view = React.useMemo(() => {
    return {
      timeline: { type: 'day' },
    };
  }, []);
  return (
    <Box
      bg="#FFFFFF"
      position="absolute"
      h="570px"
      top="112px"
      left="20px"
      borderRadius="5px"
      w="1329px"
    >
      <Eventcalendar
        theme="ios"
        themeVariant="light"
        data={schedule}
        view={view}
        resources={myResources}
      />
    </Box>
  );
};

export default MainArea;

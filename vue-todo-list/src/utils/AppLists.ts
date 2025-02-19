/**
 * define all app lists here
 */

/**
 * dashboard
 * ----------
 * default lists
 *  today
 *  personal
 *  Learning Quest
 *  Brainstorming
 *  Dream big
 * ----------
 * teams
 * schedules / deadlines
 * meetings
 * events
 */


export const sidebarList = [
  {
    label: 'Dashboard',
    icon: 'clarity:dashboard-solid',
    link: 'dashboard-overview',
  },
  {
    label: 'Lists',
    icon: 'fluent:tasks-app-28-filled',
    link: 'dashboard-lists',
    children: [],
  },
  {
    label: 'Schedules',
    icon: 'solar:calendar-bold',
    link: 'dashboard-schedules',
  },
  {
    label: 'Teams',
    icon: 'fluent:people-team-24-filled',
    link: 'dashboard-teams',
  },
  {
    label: 'Meeting',
    icon: 'icon-park-solid:online-meeting',
    link: 'dashboard-meeting',
  },
  {
    label: 'Events',
    icon: 'lucide:party-popper',
    link: 'dashboard-events',
  },
]
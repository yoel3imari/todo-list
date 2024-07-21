/**
 * define all app lists here
 */

/**
 * dashboard
 * ----------
 * default lists
 *  today
 *  tomorrow
 *  next week ?
 *  next month ?
 * ----------
 * lists / projects
 * teams
 * schedules / deadlines
 * meetings
 * events
 */


export const sidebarList = [
  {
    label: 'Dashboard',
    icon: '',
    link: 'dashboard-overview',
  },
  {
    label: 'Default',
    icon: '',
    link: 'dashboard-overview',
    children: [
      {
        label: 'Today',
        icon: '',
        link: 'dashboard-overview',
      },
      {
        label: 'Dashboard',
        icon: '',
        link: 'dashboard-overview',
      },
    ]
  },
]
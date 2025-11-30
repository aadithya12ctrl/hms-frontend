import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import DescriptionIcon from '@mui/icons-material/Description';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

export const navigationConfig = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: DashboardIcon,
    permission: 'DASHBOARD:VIEW',
  },
  {
    title: 'Patients',
    icon: LocalHospitalIcon,
    permission: 'PATIENT:READ',
    children: [
      {
        title: 'All Patients',
        path: '/patients',
        permission: 'PATIENT:READ',
      },
      {
        title: 'Register Patient',
        path: '/patients/register',
        permission: 'PATIENT:CREATE',
      },
    ],
  },
  {
    title: 'Prescriptions',
    icon: DescriptionIcon,
    permission: 'PRESCRIPTION:READ',
    children: [
      {
        title: 'All Prescriptions',
        path: '/prescriptions',
        permission: 'PRESCRIPTION:READ',
      },
      {
        title: 'Create Prescription',
        path: '/prescriptions/create',
        permission: 'PRESCRIPTION:CREATE',
      },
    ],
  },
  {
    title: 'Users',
    icon: PeopleIcon,
    permission: 'USER:READ',
    children: [
      {
        title: 'All Users',
        path: '/users',
        permission: 'USER:READ',
      },
      {
        title: 'Create User',
        path: '/users/create',
        permission: 'USER:CREATE',
      },
    ],
  },
];

// Permission checker utility
export const hasPermission = (userPermissions, requiredPermission) => {
  if (!requiredPermission) return true;
  if (!userPermissions || userPermissions.length === 0) return false;
  
  return userPermissions.includes(requiredPermission) || 
         userPermissions.includes('*');
};
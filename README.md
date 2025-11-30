🏥 Hospital Management System - Frontend
<div align="center">
Show Image
Show Image
Show Image
Show Image
Premium Gold Metallic & Black Themed Hospital Management Frontend
Features • Installation • Usage • Deployment
</div>

🎨 Theme Preview
┌─────────────────────────────────────────┐
│  ✨ Gold Metallic (#D4AF37)            │
│  🖤 Deep Black (#0A0A0A)               │
│  💎 Luxurious Gradients                │
│  ✨ Metallic Shine Effects             │
└─────────────────────────────────────────┘

✨ Features
🔐 Authentication & Authorization

JWT-based authentication
Role-based access control (RBAC)
Attribute-based access control (ABAC)
Automatic token refresh
Session management

👥 Patient Management

Patient registration (OPD/IPD)
Patient search and filtering
Patient details view
Photo upload
Medical history tracking

💊 Prescription Management

Create prescriptions
View prescription history
Prescription templates
Print/Download prescriptions

📊 Dashboard

Real-time statistics
Patient trends
Department analytics
Activity timeline

🎨 UI/UX

Gold metallic and black theme
Responsive design
Smooth animations
Loading states
Toast notifications
Skeleton loaders


🛠️ Tech Stack
CategoryTechnologyFrameworkReact 18+Build ToolViteUI LibraryMaterial-UI (MUI) 5.xState ManagementRedux ToolkitRoutingReact Router DOM 6.xHTTP ClientAxiosForm HandlingReact Hook Form + YupDate Handlingdate-fnsNotificationsReact Toastify

📁 Project Structure
hms-frontend/
├── src/
│   ├── api/                      # API service layer
│   │   ├── axiosConfig.js        # Axios configuration
│   │   ├── authService.js        # Auth endpoints
│   │   ├── patientService.js     # Patient endpoints
│   │   ├── prescriptionService.js
│   │   └── userService.js
│   ├── components/
│   │   ├── common/               # Reusable components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   └── LoadingSpinner.jsx
│   │   ├── forms/                # Form components
│   │   └── tables/               # Table components
│   ├── layouts/
│   │   ├── MainLayout.jsx        # Main app layout
│   │   └── AuthLayout.jsx        # Auth pages layout
│   ├── pages/
│   │   ├── auth/                 # Auth pages
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── ForgotPassword.jsx
│   │   ├── dashboard/
│   │   │   └── Dashboard.jsx
│   │   ├── patients/
│   │   │   ├── PatientList.jsx
│   │   │   ├── RegisterPatient.jsx
│   │   │   └── PatientDetails.jsx
│   │   ├── prescriptions/
│   │   └── users/
│   ├── redux/
│   │   ├── store.js              # Redux store
│   │   └── slices/
│   │       ├── authSlice.js
│   │       ├── patientSlice.js
│   │       └── uiSlice.js
│   ├── routes/
│   │   ├── AppRoutes.jsx         # Route definitions
│   │   ├── PrivateRoute.jsx      # Protected routes
│   │   └── routes.config.js      # Navigation config
│   ├── theme/
│   │   └── theme.js              # MUI theme config
│   ├── utils/
│   │   ├── constants.js          # App constants
│   │   ├── helpers.js            # Helper functions
│   │   └── validators.js         # Form validators
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env                          # Environment variables
├── .env.production
├── vite.config.js
└── package.json

🚀 Installation
Prerequisites

Node.js 18+ and npm
Backend API running (see backend repo)

Step 1: Clone and Install
bash# Create new project
npm create vite@latest hms-frontend -- --template react
cd hms-frontend

# Install dependencies
npm install react-router-dom @reduxjs/toolkit react-redux axios
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled
npm install react-hook-form @hookform/resolvers yup
npm install jwt-decode date-fns recharts react-toastify
Step 2: Set Up Environment
Create .env file:
envVITE_API_BASE_URL=http://localhost:5000/api
VITE_APP_NAME=Hospital Management System
VITE_APP_VERSION=1.0.0
Step 3: Copy Code Files
Copy all code from the provided artifacts into their respective files as shown in the project structure above.
Step 4: Start Development Server
bashnpm run dev
Visit http://localhost:3000

🔧 Configuration
API Configuration
Update src/api/axiosConfig.js:
javascriptconst API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';
Theme Customization
Modify src/theme/theme.js:
javascriptprimary: {
  main: '#D4AF37',  // Change gold color
  light: '#FFD700',
  dark: '#B8860B',
}
Route Permissions
Edit src/routes/routes.config.js:
javascript{
  title: 'Dashboard',
  path: '/dashboard',
  icon: DashboardIcon,
  permission: 'DASHBOARD:VIEW',  // Required permission
}

💻 Usage
Login
javascript// Default credentials (from your backend)
Email: admin@hospital.com
Password: Admin@123
Creating a Patient

Navigate to Patients → Register Patient
Fill in patient details
Upload photo (optional)
Select patient type (OPD/IPD)
Click Register Patient

Managing Users

Navigate to Users → All Users
Click Create User button
Assign roles and permissions
Set department and contact info


🏗️ Building for Production
bash# Build the project
npm run build

# Preview build locally
npm run preview
Build output will be in dist/ directory.

🚢 Deployment
Option 1: Nginx (Recommended)
1. Build the project:
bashnpm run build
2. Install Nginx:
bashsudo apt update
sudo apt install nginx
3. Copy files to server:
bashsudo mkdir -p /var/www/hms-frontend
sudo cp -r dist/* /var/www/hms-frontend/
4. Configure Nginx:
bashsudo nano /etc/nginx/sites-available/hms-frontend
Add configuration:
nginxserver {
    listen 80;
    server_name your-domain.com;

    root /var/www/hms-frontend;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    gzip on;
    gzip_types text/plain text/css application/json application/javascript;
}
5. Enable and restart:
bashsudo ln -s /etc/nginx/sites-available/hms-frontend /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
Option 2: Docker
Dockerfile:
dockerfileFROM node:20-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
Build and run:
bashdocker build -t hms-frontend .
docker run -d -p 3000:80 hms-frontend
Option 3: PM2 + Serve
bashnpm install -g pm2 serve

# Start
pm2 serve dist 3000 --name hms-frontend --spa

# Save and startup
pm2 save
pm2 startup

🔒 SSL/HTTPS Setup
bash# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Get certificate
sudo certbot --nginx -d your-domain.com

# Auto-renewal test
sudo certbot renew --dry-run

🧪 Testing
bash# Run linter
npm run lint

# Build test
npm run build

# Preview production build
npm run preview

🐛 Common Issues
Issue: CORS Errors
Solution: Update backend CORS configuration:
javascriptapp.use(cors({
  origin: ['http://localhost:3000'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Tenant-ID']
}));
Issue: 404 on Page Refresh
Solution: Configure server to serve index.html for all routes (see Nginx config above).
Issue: White Screen
Solution:

Check browser console for errors
Verify all imports are correct
Check .env file exists
Run npm install again

Issue: API Not Connecting
Solution:

Verify backend is running
Check VITE_API_BASE_URL in .env
Check browser network tab
Verify CORS configuration


📊 Performance Optimization
Code Splitting
Already handled by Vite automatically.
Lazy Loading
javascriptconst PatientList = lazy(() => import('./pages/patients/PatientList'));
Image Optimization

Use WebP format
Compress images before upload
Implement lazy loading for images

Bundle Analysis
bashnpm install -D rollup-plugin-visualizer

🔐 Security Best Practices

✅ JWT tokens stored in httpOnly cookies (recommended) or localStorage
✅ XSS protection via React's built-in escaping
✅ CSRF protection on backend
✅ Input validation with Yup
✅ Secure HTTPS in production
✅ Environment variables for sensitive data
✅ Rate limiting on API endpoints


📚 API Integration
Example: Fetch Patients
javascriptimport { patientService } from './api/patientService';

const loadPatients = async () => {
  try {
    const response = await patientService.getPatients({
      page: 1,
      limit: 20,
      search: 'John',
      type: 'OPD'
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
Example: Create Patient
javascriptconst createNewPatient = async (patientData) => {
  try {
    const response = await patientService.createPatient(patientData);
    toast.success('Patient created successfully!');
  } catch (error) {
    toast.error(error.message);
  }
};

🎯 Roadmap

 Add real-time notifications
 Implement chat support
 Add appointment scheduling
 Create billing module
 Add reports and analytics
 Implement role-based dashboard views
 Add multi-language support
 Create mobile app with React Native


🤝 Contributing

Fork the repository
Create feature branch: git checkout -b feature/AmazingFeature
Commit changes: git commit -m 'Add AmazingFeature'
Push to branch: git push origin feature/AmazingFeature
Open a Pull Request


📄 License
This project is licensed under the MIT License.

👨‍💻 Developer
Built with ❤️ using React, Redux, and Material-UI
Need help? Check the documentation or create an issue.

📞 Support

📧 Email: support@hms.com
📚 Documentation: [Link to docs]
🐛 Issues: [GitHub Issues]


<div align="center">
⭐ Star this repo if you find it helpful!
Made with gold 💛 and React ⚛️
</div>
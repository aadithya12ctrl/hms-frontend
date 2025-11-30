import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Box,
  Divider,
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { navigationConfig, hasPermission } from '../../routes/routes.config';

const DRAWER_WIDTH = 280;

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { sidebarOpen } = useSelector((state) => state.ui);
  const { user } = useSelector((state) => state.auth);
  const [openMenus, setOpenMenus] = useState({});

  const userPermissions = user?.permissions || [];

  const handleMenuClick = (item) => {
    if (item.children) {
      setOpenMenus((prev) => ({
        ...prev,
        [item.title]: !prev[item.title],
      }));
    } else {
      navigate(item.path);
    }
  };

  const isActive = (path) => location.pathname === path;

  const renderMenuItem = (item, depth = 0) => {
    if (!hasPermission(userPermissions, item.permission)) {
      return null;
    }

    const Icon = item.icon;
    const hasChildren = item.children && item.children.length > 0;
    const isOpen = openMenus[item.title];

    return (
      <React.Fragment key={item.title}>
        <ListItem disablePadding sx={{ display: 'block' }}>
          <ListItemButton
            onClick={() => handleMenuClick(item)}
            selected={!hasChildren && isActive(item.path)}
            sx={{
              pl: 2 + depth * 2,
              py: 1.5,
              '&.Mui-selected': {
                background: 'linear-gradient(90deg, rgba(212, 175, 55, 0.15) 0%, transparent 100%)',
                borderLeft: '3px solid',
                borderColor: 'primary.main',
                '&:hover': {
                  background: 'linear-gradient(90deg, rgba(212, 175, 55, 0.2) 0%, transparent 100%)',
                },
              },
              '&:hover': {
                background: 'rgba(212, 175, 55, 0.08)',
              },
            }}
          >
            {Icon && (
              <ListItemIcon
                sx={{
                  minWidth: 40,
                  color: isActive(item.path) ? 'primary.main' : 'text.secondary',
                }}
              >
                <Icon />
              </ListItemIcon>
            )}
            <ListItemText
              primary={item.title}
              primaryTypographyProps={{
                fontSize: '0.95rem',
                fontWeight: isActive(item.path) ? 600 : 400,
                color: isActive(item.path) ? 'primary.main' : 'text.primary',
              }}
            />
            {hasChildren && (isOpen ? <ExpandLess /> : <ExpandMore />)}
          </ListItemButton>
        </ListItem>

        {hasChildren && (
          <Collapse in={isOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {item.children.map((child) => renderMenuItem(child, depth + 1))}
            </List>
          </Collapse>
        )}
      </React.Fragment>
    );
  };

  return (
    <Drawer
      variant="persistent"
      open={sidebarOpen}
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: DRAWER_WIDTH,
          boxSizing: 'border-box',
          mt: 8,
          borderRight: '1px solid rgba(212, 175, 55, 0.2)',
          background: 'linear-gradient(180deg, #0A0A0A 0%, #1A1A1A 100%)',
        },
      }}
    >
      <Box sx={{ overflow: 'auto', py: 2 }}>
        <List>{navigationConfig.map((item) => renderMenuItem(item))}</List>
        <Divider sx={{ my: 2, borderColor: 'rgba(212, 175, 55, 0.2)' }} />
      </Box>
    </Drawer>
  );
};

export default Sidebar;
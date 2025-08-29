// src/context/DashboardContext.jsx
import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { useAuth } from './AuthContext';

// Initial state
const initialState = {
  kpis: {
    totalShipments: 0,
    onTimeDelivery: 0,
    averageDeliveryTime: 0,
    activeAlerts: 0
  },
  chartData: {
    shipmentVolume: [],
    deliveryPerformance: [],
    delayLikelihood: [],
    routeOptimization: [],
    shipmentStatus: [],
    geospatialDensity: []
  },
  aiInsights: [],
  loading: false,
  error: null,
  lastUpdated: null
};

// Action types
const DASHBOARD_ACTIONS = {
  FETCH_START: 'FETCH_START',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  FETCH_FAILURE: 'FETCH_FAILURE',
  UPDATE_KPI: 'UPDATE_KPI',
  ADD_AI_INSIGHT: 'ADD_AI_INSIGHT',
  CLEAR_ERROR: 'CLEAR_ERROR'
};

// Reducer function
const dashboardReducer = (state, action) => {
  switch (action.type) {
    case DASHBOARD_ACTIONS.FETCH_START:
      return {
        ...state,
        loading: true,
        error: null
      };

    case DASHBOARD_ACTIONS.FETCH_SUCCESS:
      return {
        ...state,
        ...action.payload,
        loading: false,
        error: null,
        lastUpdated: new Date().toISOString()
      };

    case DASHBOARD_ACTIONS.FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case DASHBOARD_ACTIONS.UPDATE_KPI:
      return {
        ...state,
        kpis: {
          ...state.kpis,
          ...action.payload
        }
      };

    case DASHBOARD_ACTIONS.ADD_AI_INSIGHT:
      return {
        ...state,
        aiInsights: [action.payload, ...state.aiInsights.slice(0, 4)] // Keep only 5 insights
      };

    case DASHBOARD_ACTIONS.CLEAR_ERROR:
      return {
        ...state,
        error: null
      };

    default:
      return state;
  }
};

// Create context
const DashboardContext = createContext();

// Dashboard Provider component
export const DashboardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dashboardReducer, initialState);
  const { isAuthenticated, user } = useAuth();

  // Fetch dashboard data when user is authenticated
  useEffect(() => {
    if (isAuthenticated && user) {
      fetchDashboardData();
    }
  }, [isAuthenticated, user]);

  // Mock dashboard data fetch
  const fetchDashboardData = async () => {
    dispatch({ type: DASHBOARD_ACTIONS.FETCH_START });

    try {
      // TODO: Replace with actual API call
      const mockData = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            kpis: {
              totalShipments: 18234,
              onTimeDelivery: 97.2,
              averageDeliveryTime: 2.8,
              activeAlerts: 35
            },
            chartData: {
              shipmentVolume: [
                { month: 'Jan', value: 800 },
                { month: 'Feb', value: 900 },
                { month: 'Mar', value: 850 },
                { month: 'Apr', value: 1100 },
                { month: 'May', value: 1300 },
                { month: 'Jun', value: 1200 },
                { month: 'Jul', value: 1400 },
                { month: 'Aug', value: 1350 },
                { month: 'Sep', value: 1500 },
                { month: 'Oct', value: 1600 },
                { month: 'Nov', value: 1550 }
              ],
              deliveryPerformance: [
                { name: 'DHL', onTime: 95, delayed: 5 },
                { name: 'FedEx', onTime: 92, delayed: 8 },
                { name: 'UPS', onTime: 88, delayed: 12 },
                { name: 'USPS', onTime: 85, delayed: 15 },
                { name: 'Others', onTime: 78, delayed: 22 }
              ]
            },
            aiInsights: [
              {
                id: '1',
                type: 'volume_prediction',
                title: 'Volume Surge Expected',
                message: 'AI predicts 15% increase in shipments next week',
                priority: 'medium',
                timestamp: new Date().toISOString()
              },
              {
                id: '2',
                type: 'delay_alert',
                title: 'Weather Delay Risk',
                message: '3 shipments at risk due to storm conditions',
                priority: 'high',
                timestamp: new Date().toISOString()
              },
              {
                id: '3',
                type: 'optimization',
                title: 'Cost Savings Opportunity',
                message: 'Route optimization can save $2,400 this week',
                priority: 'low',
                timestamp: new Date().toISOString()
              }
            ]
          });
        }, 1500);
      });

      dispatch({
        type: DASHBOARD_ACTIONS.FETCH_SUCCESS,
        payload: mockData
      });
    } catch (error) {
      dispatch({
        type: DASHBOARD_ACTIONS.FETCH_FAILURE,
        payload: error.message || 'Failed to fetch dashboard data'
      });
    }
  };

  // Refresh dashboard data
  const refreshData = () => {
    fetchDashboardData();
  };

  // Add AI insight
  const addAIInsight = (insight) => {
    dispatch({
      type: DASHBOARD_ACTIONS.ADD_AI_INSIGHT,
      payload: {
        ...insight,
        id: Date.now().toString(),
        timestamp: new Date().toISOString()
      }
    });
  };

  // Clear error
  const clearError = () => {
    dispatch({ type: DASHBOARD_ACTIONS.CLEAR_ERROR });
  };

  const value = {
    ...state,
    refreshData,
    addAIInsight,
    clearError
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};

// Custom hook to use dashboard context
export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
};

export { DASHBOARD_ACTIONS };

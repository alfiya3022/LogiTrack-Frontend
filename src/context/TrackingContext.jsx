// src/context/TrackingContext.jsx
import React, { createContext, useContext, useReducer } from 'react';

// Initial state
const initialState = {
  currentShipment: null,
  trackingHistory: [],
  recentSearches: [],
  loading: false,
  error: null
};

// Action types
const TRACKING_ACTIONS = {
  TRACK_START: 'TRACK_START',
  TRACK_SUCCESS: 'TRACK_SUCCESS',
  TRACK_FAILURE: 'TRACK_FAILURE',
  ADD_TO_RECENT: 'ADD_TO_RECENT',
  CLEAR_CURRENT: 'CLEAR_CURRENT',
  CLEAR_ERROR: 'CLEAR_ERROR'
};

// Reducer function
const trackingReducer = (state, action) => {
  switch (action.type) {
    case TRACKING_ACTIONS.TRACK_START:
      return {
        ...state,
        loading: true,
        error: null
      };

    case TRACKING_ACTIONS.TRACK_SUCCESS:
      return {
        ...state,
        currentShipment: action.payload,
        loading: false,
        error: null
      };

    case TRACKING_ACTIONS.TRACK_FAILURE:
      return {
        ...state,
        currentShipment: null,
        loading: false,
        error: action.payload
      };

    case TRACKING_ACTIONS.ADD_TO_RECENT:
      const newSearch = action.payload;
      const filteredSearches = state.recentSearches.filter(
        search => search.id !== newSearch.id
      );
      return {
        ...state,
        recentSearches: [newSearch, ...filteredSearches].slice(0, 5) // Keep only 5 recent
      };

    case TRACKING_ACTIONS.CLEAR_CURRENT:
      return {
        ...state,
        currentShipment: null
      };

    case TRACKING_ACTIONS.CLEAR_ERROR:
      return {
        ...state,
        error: null
      };

    default:
      return state;
  }
};

// Create context
const TrackingContext = createContext();

// Tracking Provider component
export const TrackingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(trackingReducer, initialState);

  // Track shipment function
  const trackShipment = async (trackingId) => {
    dispatch({ type: TRACKING_ACTIONS.TRACK_START });

    try {
      // TODO: Replace with actual API call
      const mockShipmentData = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            id: trackingId,
            status: 'In Transit',
            origin: 'Shanghai, China',
            destination: 'New York, USA',
            currentLocation: 'Los Angeles Port, USA',
            eta: '2024-03-26',
            progress: 75,
            history: [
              {
                title: "Departed Origin Facility",
                date: "Oct 20, 2024 at 14:30",
                location: "Shanghai Port, China",
              },
              {
                title: "In Transit (Ocean Freight)",
                date: "Oct 21, 2024 at 08:00",
                location: "Pacific Ocean",
              },
              {
                title: "Cleared Customs",
                date: "Oct 22, 2024 at 16:45",
                location: "En Route to USA",
              },
              {
                title: "Arrived at Destination Port",
                date: "Oct 23, 2024 at 05:10",
                location: "Long Beach Port, USA",
              },
              {
                title: "In Transit to Distribution Hub",
                date: "Oct 23, 2024 at 10:00",
                location: "Los Angeles, USA",
              }
            ]
          });
        }, 1000);
      });

      dispatch({
        type: TRACKING_ACTIONS.TRACK_SUCCESS,
        payload: mockShipmentData
      });

      // Add to recent searches
      dispatch({
        type: TRACKING_ACTIONS.ADD_TO_RECENT,
        payload: {
          id: trackingId,
          description: `Shipment from ${mockShipmentData.origin}`,
          searchDate: new Date().toISOString()
        }
      });

      return mockShipmentData;
    } catch (error) {
      dispatch({
        type: TRACKING_ACTIONS.TRACK_FAILURE,
        payload: error.message || 'Failed to track shipment'
      });
      throw error;
    }
  };

  // Clear current shipment
  const clearCurrentShipment = () => {
    dispatch({ type: TRACKING_ACTIONS.CLEAR_CURRENT });
  };

  // Clear error
  const clearError = () => {
    dispatch({ type: TRACKING_ACTIONS.CLEAR_ERROR });
  };

  const value = {
    ...state,
    trackShipment,
    clearCurrentShipment,
    clearError
  };

  return (
    <TrackingContext.Provider value={value}>
      {children}
    </TrackingContext.Provider>
  );
};

// Custom hook to use tracking context
export const useTracking = () => {
  const context = useContext(TrackingContext);
  if (!context) {
    throw new Error('useTracking must be used within a TrackingProvider');
  }
  return context;
};

export { TRACKING_ACTIONS };

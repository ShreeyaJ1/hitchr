import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MapPin, Navigation, Plus, Users, Car } from 'lucide-react-native';

// Mock user data
const mockUser = {
  current_role: 'rider',
  display_name: 'Demo User',
};

const mockNearbyUsers = [
  { id: '1', name: 'Alex Kumar', role: 'pilot', rating: 4.8, distance: '0.5 km' },
  { id: '2', name: 'Priya Singh', role: 'pilot', rating: 4.9, distance: '1.2 km' },
  { id: '3', name: 'Raj Patel', role: 'rider', rating: 4.7, distance: '0.8 km' },
];

export default function MapScreen() {
  const [currentUser, setCurrentUser] = useState(mockUser);
  const [nearbyUsers, setNearbyUsers] = useState(mockNearbyUsers);

  return (
    <LinearGradient
      colors={['#0d1222', '#1f1d3e', '#3d1b3d', '#1a1f3a']}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>
              {currentUser.current_role === 'pilot' ? 'Offer a Ride' : 'Find a Ride'}
            </Text>
            <Text style={styles.subtitle}>
              {currentUser.current_role === 'pilot' 
                ? 'Share your journey with fellow travelers' 
                : 'Discover nearby rides and start your adventure'
              }
            </Text>
          </View>

          {/* Mock Map */}
          <View style={styles.mapContainer}>
            <View style={styles.mapPlaceholder}>
              <View style={styles.centerMarker}>
                <View style={styles.pulseMarker} />
                <View style={styles.staticMarker} />
              </View>
              
              {/* Mock nearby markers */}
              <View style={[styles.nearbyMarker, { top: '25%', left: '35%' }]}>
                <Users size={16} color="#ffffff" />
              </View>
              <View style={[styles.nearbyMarker, { top: '65%', right: '30%' }]}>
                <Car size={16} color="#ffffff" />
              </View>
              <View style={[styles.nearbyMarker, { top: '40%', left: '20%' }]}>
                <MapPin size={16} color="#ffffff" />
              </View>
            </View>

            {/* Map Controls */}
            <View style={styles.mapControls}>
              <TouchableOpacity style={styles.controlButton}>
                <Plus size={20} color="#94a3b8" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.controlButton}>
                <Navigation size={20} color="#94a3b8" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Nearby Users */}
          <View style={styles.nearbyContainer}>
            <Text style={styles.sectionTitle}>
              Nearby {currentUser.current_role === 'pilot' ? 'Riders' : 'Pilots'}
            </Text>
            
            {nearbyUsers.map((user) => (
              <View key={user.id} style={styles.userCard}>
                <View style={styles.userAvatar}>
                  <Text style={styles.userInitial}>{user.name[0]}</Text>
                </View>
                <View style={styles.userInfo}>
                  <Text style={styles.userName}>{user.name}</Text>
                  <Text style={styles.userDetails}>
                    ⭐ {user.rating} • {user.distance} away
                  </Text>
                </View>
                <TouchableOpacity style={styles.connectButton}>
                  <Text style={styles.connectButtonText}>Connect</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    paddingTop: 20,
    paddingBottom: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    fontFamily: 'Inter-Bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#94a3b8',
    fontFamily: 'Inter-Regular',
  },
  mapContainer: {
    marginBottom: 30,
    backgroundColor: 'rgba(22, 28, 45, 0.5)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 24,
    padding: 16,
  },
  mapPlaceholder: {
    height: 300,
    backgroundColor: '#1e293b',
    borderRadius: 16,
    position: 'relative',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  centerMarker: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -12 }, { translateY: -12 }],
  },
  pulseMarker: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#06b6d4',
    opacity: 0.6,
  },
  staticMarker: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#06b6d4',
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  nearbyMarker: {
    position: 'absolute',
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(22, 28, 45, 0.8)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapControls: {
    position: 'absolute',
    top: 20,
    right: 20,
    gap: 8,
  },
  controlButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: 'rgba(22, 28, 45, 0.8)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nearbyContainer: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    fontFamily: 'Inter-Bold',
    marginBottom: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  userCard: {
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  userAvatar: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: 'rgba(59, 130, 246, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  userInitial: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    fontFamily: 'Inter-Bold',
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
    fontFamily: 'Inter-SemiBold',
    marginBottom: 4,
  },
  userDetails: {
    fontSize: 14,
    color: '#94a3b8',
    fontFamily: 'Inter-Regular',
  },
  connectButton: {
    backgroundColor: 'rgba(0, 170, 255, 0.2)',
    borderWidth: 1,
    borderColor: 'rgba(0, 170, 255, 0.4)',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  connectButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ffffff',
    fontFamily: 'Inter-SemiBold',
  },
});
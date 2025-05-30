import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeft, MapPin, Map, Search, Clock, Eye } from 'lucide-react-native';
import {useTheme} from "@/theme/context/theme-context";
import {Theme} from "@/types/theme";

let MapView: any = () => null;
let Marker: any = () => null;
let Circle: any = () => null;

// Only import MapView on native platforms
if (Platform.OS !== 'web') {
  const Maps = require('react-native-maps');
  MapView = Maps.default;
  Marker = Maps.Marker;
  Circle = Maps.Circle;
}

// Mock data for available rides
const AVAILABLE_RIDES = [
  { id: 1, latitude: 37.785834, longitude: -122.406417, seats: 2 },
  { id: 2, latitude: 37.787834, longitude: -122.408417, seats: 3 },
  { id: 3, latitude: 37.782834, longitude: -122.404417, seats: 2 },
  { id: 4, latitude: 37.784834, longitude: -122.402417, seats: 4 },
  { id: 5, latitude: 37.781834, longitude: -122.401417, seats: 5 },
  { id: 6, latitude: 37.786834, longitude: -122.405417, seats: 6 },
];

export default function RidesScreen() {
  const {theme} = useTheme();
  const styles = createStyles(theme);

  const [region, setRegion] = useState({
    latitude: 37.785834,
    longitude: -122.406417,
    latitudeDelta: 0.0122,
    longitudeDelta: 0.0121,
  });

  const [origin, setOrigin] = useState('1901 Thornridge Cir. Shiloh');
  const [destination, setDestination] = useState('');

  const renderMap = () => {
    if (Platform.OS === 'web') {
      return (
        <View style={[styles.map, styles.webMapPlaceholder]}>
          <Text style={styles.webMapText}>Map View</Text>
          <Text style={styles.webMapSubtext}>Maps are only available on mobile devices</Text>
        </View>
      );
    }

    return (
      <MapView
        provider="google"
        style={styles.map}
        region={region}
        showsUserLocation
      >
        {/* User's current location */}
        <Marker
          coordinate={{
            latitude: region.latitude,
            longitude: region.longitude,
          }}
        >
          <View style={styles.userMarker}>
            <Image
              source={{ uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg' }}
              style={styles.userMarkerImage}
            />
          </View>
        </Marker>

        {/* Available rides */}
        {AVAILABLE_RIDES.map((ride) => (
          <React.Fragment key={ride.id}>
            <Marker
              coordinate={{
                latitude: ride.latitude,
                longitude: ride.longitude,
              }}
            >
              <View style={styles.carMarker}>
                <Text style={styles.markerText}>{ride.seats}</Text>
              </View>
            </Marker>
            <Circle
              center={{
                latitude: ride.latitude,
                longitude: ride.longitude,
              }}
              radius={200}
              fillColor={theme.color.primary + '33'}
              strokeWidth={0}
            />
          </React.Fragment>
        ))}
      </MapView>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <ChevronLeft size={24} color={theme.color.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Ride</Text>
      </View>

      <View style={styles.mapContainer}>
        {renderMap()}

        <TouchableOpacity style={styles.mapControlButton}>
          <Eye size={20} color="#FFF" />
        </TouchableOpacity>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.locationContainer}>
          <View style={styles.locationHeader}>
            <Text style={styles.locationLabel}>From</Text>
            <TouchableOpacity>
              <Eye size={18} color={theme.color.primary} />
            </TouchableOpacity>
          </View>
          <View style={styles.locationInput}>
            <MapPin size={20} color={theme.color.primary} />
            <TextInput
              style={styles.input}
              value={origin}
              onChangeText={setOrigin}
            />
          </View>
        </View>

        <View style={styles.locationContainer}>
          <View style={styles.locationHeader}>
            <Text style={styles.locationLabel}>To</Text>
            <TouchableOpacity>
              <Map size={18} color={theme.color.primary} />
            </TouchableOpacity>
          </View>
          <View style={styles.locationInput}>
            <MapPin size={20} color={theme.color.secondary} />
            <TextInput
              style={styles.input}
              value={destination}
              onChangeText={setDestination}
              placeholder="To location"
              placeholderTextColor={theme.color.textMuted}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.findRideButton}>
          <Text style={styles.findRideButtonText}>Find Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const createStyles = (theme: Theme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: theme.size.lg,
    paddingVertical: theme.size.md,
  },
  backButton: {
    marginRight: theme.size.md,
  },
  headerTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 22,
    color: theme.color.text,
  },
  mapContainer: {
    flex: 1,
    position: 'relative',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  webMapPlaceholder: {
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  webMapText: {
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
    color: theme.color.textMuted,
  },
  webMapSubtext: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: theme.color.textMuted,
    marginTop: 8,
  },
  userMarker: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFF',
    borderWidth: 2,
    borderColor: theme.color.primary,
    overflow: 'hidden',
  },
  userMarkerImage: {
    width: '100%',
    height: '100%',
  },
  carMarker: {
    backgroundColor: theme.color.success,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: theme.br.full,
  },
  markerText: {
    color: '#FFF',
    fontSize: 12,
    fontFamily: 'Poppins-Bold',
  },
  mapControlButton: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: theme.color.primary,
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  formContainer: {
    backgroundColor: theme.color.background,
    paddingHorizontal: theme.size.lg,
    paddingVertical: theme.size.lg,
    borderTopLeftRadius: theme.br.lg,
    borderTopRightRadius: theme.br.lg,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  locationContainer: {
    marginBottom: theme.size.md,
  },
  locationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.size.xs,
  },
  locationLabel: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: theme.color.text,
  },
  locationInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.color.background,
    borderRadius: theme.br.md,
    paddingHorizontal: theme.size.md,
    paddingVertical: theme.size.sm,
  },
  input: {
    flex: 1,
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: theme.color.text,
    marginLeft: theme.size.sm,
  },
  findRideButton: {
    backgroundColor: theme.color.primary,
    borderRadius: theme.br.full,
    paddingVertical: theme.size.md,
    marginTop: theme.size.sm,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  findRideButtonText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#FFF',
  },
});
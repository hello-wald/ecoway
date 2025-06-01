import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeft, MapPin, Map, Search, Clock, Eye } from 'lucide-react-native';
import {useTheme} from "@/theme/provider/theme-provider";
import { BorderRadius, IconSize, Spacing } from "@/theme";
import { ThemeColors } from "@/theme/colors";

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
  const {Colors} = useTheme();
  const styles = createStyles(Colors);

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
              fillColor={Colors.primary + '33'}
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
          <ChevronLeft size={IconSize.md} color={Colors.foreground} />
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
              <Eye size={18} color={Colors.primary} />
            </TouchableOpacity>
          </View>
          <View style={styles.locationInput}>
            <MapPin size={20} color={Colors.primary} />
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
              <Map size={18} color={Colors.primary} />
            </TouchableOpacity>
          </View>
          <View style={styles.locationInput}>
            <MapPin size={20} color={Colors.secondary} />
            <TextInput
              style={styles.input}
              value={destination}
              onChangeText={setDestination}
              placeholder="To location"
              placeholderTextColor={Colors.mutedForeground}
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

const createStyles = (Colors: ThemeColors) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
  },
  backButton: {
    marginRight: Spacing.md,
  },
  headerTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 22,
    color: Colors.foreground,
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
    color: Colors.mutedForeground,
  },
  webMapSubtext: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: Colors.mutedForeground,
    marginTop: 8,
  },
  userMarker: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFF',
    borderWidth: 2,
    borderColor: Colors.primary,
    overflow: 'hidden',
  },
  userMarkerImage: {
    width: '100%',
    height: '100%',
  },
  carMarker: {
    backgroundColor: Colors.success,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: BorderRadius.full,
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
    backgroundColor: Colors.primary,
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
    backgroundColor: Colors.background,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.lg,
    borderTopLeftRadius: BorderRadius.lg,
    borderTopRightRadius: BorderRadius.lg,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  locationContainer: {
    marginBottom: Spacing.md,
  },
  locationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.xs,
  },
  locationLabel: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: Colors.foreground,
  },
  locationInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.background,
    borderRadius: BorderRadius.md,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
  },
  input: {
    flex: 1,
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: Colors.foreground,
    marginLeft: Spacing.sm,
  },
  findRideButton: {
    backgroundColor: Colors.primary,
    borderRadius: BorderRadius.full,
    paddingVertical: Spacing.md,
    marginTop: Spacing.sm,
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
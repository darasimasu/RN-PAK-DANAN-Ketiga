import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MapView, {Marker} from "react-native-maps";

class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <MapView
          style={{flex: 1}}
          zoomControlEnabled={true}
          initialRegion={{
            latitude: 0.9209331645369188,
            longitude: 104.45412553786923,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          mapType = {'satellite'}
        >
        <Marker
          coordinate={{latitude:0.9209331645369188, longitude: 104.45412553786923}}
          title={'STTI Tanjungpinang'}
          description={'Jl. Brigjen Katamso'}
        />
        <Marker
          coordinate={{latitude:0.9052793592694556, longitude: 104.47654328078842}}  
          title={'STIE Tanjungpinang'}
          description={'Jl. R. H. Fisabillillah, No. 34, Sei Jang, Bukit Bestari'}
        />
        <Marker
          coordinate={{latitude:0.8965026598959186, longitude: 104.48072169612922}}  
          title={'STISIPOL Tanjungpinang'}
          description={'Jl. Raja Haji Fisabilillah, Kelurahan No.48, Sei Jang, Kec. Bukit Bestari'}
        />
        
        </MapView>
        
      </View>
    );
  }
}

export default App;
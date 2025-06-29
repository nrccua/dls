/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useTheme } from '@mui/material/styles';
import bbox from '@turf/bbox';
import isString from 'lodash/isString';
import numeral from 'numeral';
import React from 'react';

import Map, {
  FeatureHoverProps,
  InitialBoundsPositionProps,
  MapProps,
} from '~/components/Map';
import MapPopup, { MapPopupProps } from '~/components/MapPopup';
import { IMapDataProps } from '~/types';

import type GeoJSON from 'geojson';

export interface GeomarketMapProps {
  data: Array<IMapDataProps>;
  geoJSONPath: string;
  mapboxAccessToken: string;
  mapPopupProps?: Partial<MapPopupProps>;
  mapProps?: Omit<Partial<MapProps>, 'mapboxAccessToken'>;
  onHoverInfo?: FeatureHoverProps;
  processDataFn?: (
    featureCollection: GeoJSON.FeatureCollection<GeoJSON.Geometry>,
    data: Array<IMapDataProps>,
  ) => GeoJSON.FeatureCollection<GeoJSON.Geometry>;
  selectedGeomarket?: Array<string>;
  setOnHoverInfo?: (newHoverInfo: FeatureHoverProps | undefined) => void;
  tooltipElement?: React.ReactElement;
}

/**
 * GeomarketMap component which under the hood uses mapbox and react-map-gl. For this to work it's necessary
 * to add the link bellow in the head of your page: <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v2.7.0/mapbox-gl.css' rel='stylesheet' />
 * For more information: https://visgl.github.io/react-map-gl/docs/get-started/get-started#styling
 */
export const GeomarketMap: React.FC<GeomarketMapProps> = ({
  data,
  geoJSONPath,
  mapboxAccessToken,
  mapPopupProps,
  mapProps,
  onHoverInfo,
  processDataFn,
  selectedGeomarket,
  setOnHoverInfo,
  tooltipElement,
}): React.ReactElement<GeomarketMapProps> => {
  const { breakpoints, spacing } = useTheme();

  const [geomarketJSON, setGeomarketJSON] =
    React.useState<GeoJSON.FeatureCollection<GeoJSON.Geometry>>();
  const [hoverInfo, setHoverInfo] = React.useState<FeatureHoverProps>();
  const finalHoverInfo = onHoverInfo || hoverInfo;

  React.useEffect(() => {
    fetch(geoJSONPath)
      .then(resp => resp.json())
      .then(json =>
        setGeomarketJSON(json as GeoJSON.FeatureCollection<GeoJSON.Geometry>),
      )
      .catch(err => console.error('Could not load data', err)); // eslint-disable-line
  }, []);

  const processedData = React.useMemo(() => {
    return geomarketJSON && processDataFn && processDataFn(geomarketJSON, data);
  }, [data, geomarketJSON, processDataFn]);

  const initialBoundsPosition = React.useMemo(():
    | InitialBoundsPositionProps
    | undefined => {
    if (selectedGeomarket && processedData) {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      const features = processedData.features.filter(f =>
        selectedGeomarket.includes(f.id as string),
      );

      if (features.length > 0) {
        const [minLng, minLat, maxLng, maxLat] = bbox({
          features,
          type: 'FeatureCollection',
        });

        return {
          id: features.length > 1 ? undefined : selectedGeomarket[0],
          position: [
            [minLng, minLat],
            [maxLng, maxLat],
          ],
        };
      }
    }

    return undefined;
  }, [processedData, selectedGeomarket]);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  if (!processedData) return <></>;

  const parentHeight = mapProps?.height || 450;
  const parentWidth = mapProps?.width || '100%';

  return (
    <Map
      data={processedData}
      height={parentHeight}
      initialBoundsPosition={initialBoundsPosition}
      mapboxAccessToken={mapboxAccessToken}
      setHoverInfo={setOnHoverInfo || setHoverInfo}
      sourceProps={{ promoteId: 'id', type: 'geojson' }}
      width={parentWidth}
      {...mapProps}
    >
      {tooltipElement ||
        (finalHoverInfo &&
        (isString(parentWidth) ||
          parentWidth > breakpoints.values.sm - parseInt(spacing(12), 10)) ? (
          <MapPopup
            popupProps={{
              latitude: finalHoverInfo.lat,
              longitude: finalHoverInfo.lng,
            }}
            rows={[
              {
                title: 'Geomarket',
                value: finalHoverInfo.feature.properties?.name as string,
              },
              {
                title: 'Code',
                value: finalHoverInfo.feature.id as string,
              },
              {
                title: 'Volume',
                value: numeral(
                  finalHoverInfo.feature.properties?.value as number,
                ).format('0,0'),
              },
            ]}
            {...mapPopupProps}
          />
        ) : undefined)}
    </Map>
  );
};

export default GeomarketMap;

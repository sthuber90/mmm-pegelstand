# Pegelstand - Magic Mirror Module

> [Magic Mirror](https://docs.magicmirror.builders) Module to get information of water level for rivers in Baden-Württemberg

![Example image of module in use.](docs/image1.png)
![Example image of module in use, exceeding a flooding limit.](docs/image2.png)

## Installation

Run these commands at the root of your **MagicMirror²**

```bash
cd modules
git clone https://github.com/sthuber90/mmm-pegel
```

## Usage

To use this module, add the following configuration block to the modules array in the config/config.js file:

```javascript
var config = {
  modules: [
    {
      module: 'mmm-pegelstand',
      position: 'bottom_left',
      config: {
        // see below for configurable options
      },
    },
  ],
}
```

## Configuration

- `pgnr` (`string`) **required**
  - cool
- `floodLimit` (`int`)
  - cool
- `refreshInterval` (`int`)
  - cool

## Testing

Automated tests are planned but currently hard to implement. However, if you have Docker installed locally, you can run `npm run start`. This will run [karsten13/magicmirror](https://karsten13.de/magicmirror/) and make MagicMirror² with the water level module accessible on _http://localhost:8080_.

Tests setup inspired by https://github.com/fewieden/MMM-soccer

## Contribution

Contributions are welcome. For feature requests and to track bugs please open an issue.

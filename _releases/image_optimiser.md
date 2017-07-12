---
layout: release
title: Image Optimiser
summary: A picture says a thousand words - and a thousand kilobytes. The Image Optimiser app automatically compresses user created images ensuring a fast page load and a green tick from Google. With plenty of options available, the freedom is yours between quality and speed.

# Download
repository: RedFinch/Perch-Image-Optim
version: v1.0.0

# Theme
accent: '#D63939'
preview: /previews/perch-optimiser.png

# Requirements Meta
requirements:
  - Perch >= 3.0
  - PHP >= 7.0
  - Server installation access

# Documentation Sidebar
nav:
  - section: Prerequisites
    links:
      - label: Software
  - section: Installation
    links:
      - label: Requirements
      - label: Adding to Perch
      - label: Configuration
      - label: Performance
  - section: Limitations
    links:
      - label: Environment
  - section: Miscellaneous
    links:
      - label: Credits
      - label: License
---

## Prerequisites

### Software

Before installing this package your site must be hosted on an environment that allows you to install and run other software through PHP such as a VPS. The application makes use of the following utilities:

* [JpegOptim](http://freecode.com/projects/jpegoptim)
* [Optipng](http://optipng.sourceforge.net/)
* [Pngquant 2](https://pngquant.org/)
* [SVGO](https://github.com/svg/svgo)
* [Gifsicle](http://www.lcdf.org/gifsicle/)

#### Installing

To install the above on Ubuntu:

```bash
sudo apt-get install jpegoptim
sudo apt-get install optipng
sudo apt-get install pngquant
sudo npm install -g svgo
sudo apt-get install gifsicle
```

MacOS ([Homebrew](https://brew.sh/)):

```bash
brew install jpegoptim
brew install optipng
brew install pngquant
brew install svgo
brew install gifsicle
```

## Installation
### Requirements

* PHP >= 7
* Perch / Runway >= 3.0

### Adding to Perch

Upload the `redfinch_optim` directory to `perch/addons/apps`. Once complete you should see the app appear in the sidebar menu.

If not already, you should enable [Scheduled Tasks ](https://docs.grabaperch.com/perch/getting-started/installing/scheduled-tasks/)for the optimisation tasks to be automatically run.

### Configuration

Once installed there are a wide variety of settings that can be modified depending on your requirements:

* Enable or disable optimisation tools
* Set the compression amount
* Strip file meta data for smaller sizes
* Enable or disable SVG optimisation plugins

### Performance

The optimiser task will run once every 24 hours and will use a high level of CPU power to compress images. If you find that this is too much you can:

1. Reduce the compression level. PNG optimisation can be particularly resource intensive
2. Increase the image quality
3. Disable the particular optimiser.

You can additionally set a max execution time in the Perch settings panel. By default this is set to 30 seconds.

## Limitations

### Environment

This addon will only work for images that are stored locally. Files using cloud storage providers such as Amazon S3 cannot be optimised using this tool.

If you are not on a platform that can install and run the tools listed in the prerequisites section then the official [Perch Kraken](https://addons.perchcms.com/addons/kraken) application may be suitable.

## Miscellaneous

### Credits

[Spatie](https://spatie.be) and [Freek Van der Herten](https://github.com/freekmurze) for the [Image Optimizer](https://github.com/spatie/image-optimizer/) package.

### License

MIT License

Copyright (c) 2017 James Wigger / Red Finch

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
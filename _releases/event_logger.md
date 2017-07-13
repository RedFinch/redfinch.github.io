---
layout: release
title: Event Logger
summary: The Perch Event Log is your trusty companion, tracking what has changed and who changed it. If you need to dive deeper, the app provides a history view showing additions, deletions and modifications over time to give a complete picture as your site evolves.

# Download
repository: RedFinch/Perch-Event-Log
version: v1.0.1

# Theme
accent: '#1B85F4'
preview: /previews/perch-logger.png

# Requirements Meta
requirements:
  - Perch >= 3.0
  - PHP >= 5.4

# Documentation Sidebar
nav:
  - section: Installation
    links:
      - label: Requirements
      - label: Adding to Perch
      - label: Configuration
  - section: Tracking
    links:
      - label: Events
      - label: History
  - section: Miscellaneous
    links:
      - label: License
      
# Meta
meta:
  title: 'Perch Event Logger'
---

## Installation

### Requirements

* PHP >= 5.4
* Perch / Runway >= 3.0

### Adding to Perch

Upload the `redfinch_logger` directory to `perch/addons/apps`. Once complete you should see the app appear in the sidebar menu.

Initially the *Type*, *Action* and *User* filters may be empty - these will be populated as the number of events logged increases.

### Configuration

Logs can be automatically deleted after a set number of days. If you wish this to occur, please set the length of time to keep logs (1, 3, 6 or 12 months) and make sure that Perch's [scheduled tasks](https://docs.grabaperch.com/perch/getting-started/installing/scheduled-tasks/) are operational.

## Tracking

### Events

The list of events that are tracked include:

* `item.delete`
* `region.truncate`
* `region.share`
* `region.unshare`
* `region.undo`
* `region.publish`
* `region.delete`
* `collection.publish_item`
* `assets.upload_image`

Certain events include a history tab that shows changes over time. Asset based events will attempt to show a preview of the uploaded image, however if the log is older or the asset is deleted this may not always be possible.

## Miscellaneous

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
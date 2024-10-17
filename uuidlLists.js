var serviceUuidList = {
    0x1800: "Generic Access",
    0x1801: "Generic Attribute",
    0x1802: "Immediate Alert",
    0x1803: "Link Loss",
    0x1804: "Tx Power",
    0x1805: "Current Time Service",
    0x1806: "Reference Time Update Service",
    0x1807: "Next DST Change Service",
    0x1808: "Glucose",
    0x1809: "Health Thermometer",
    0x180A: "Device Information",
    0x180B: "Network Availability Service",
    0x180D: "Heart Rate",
    0x180E: "Phone Alert Status Service",
    0x180F: "Battery Service",
    0x1810: "Blood Pressure",
    0x1811: "Alert Notification Service",
    0x1812: "Human Interface Device",
    0x1813: "Scan Parameters",
    0x1814: "Running Speed and Cadence",
    0x1815: "Automation IO",
    0x1816: "Cycling Speed and Cadence",
    0x1818: "Cycling Power",
    0x1819: "Location and Navigation",
    0x181A: "Environmental Sensing",
    0x181B: "Body Composition",
    0x181C: "User Data",
    0x181D: "Weight Scale",
    0x181E: "Bond Management Service",
    0x181F: "Continuous Glucose Monitoring",
    0x1820: "Internet Protocol Support Service",
    0x1821: "Indoor Positioning",
    0x1822: "Pulse Oximeter Service",
    0x1823: "HTTP Proxy",
    0x1824: "Transport Discovery",
    0x1825: "Object Transfer Service",
    0x1826: "Fitness Machine",
    0x1827: "Mesh Provisioning Service",
    0x1828: "Mesh Proxy Service",
    0x1829: "Reconnection Configuration",
};

var characteristicUuidList = {
    0x2A00: "Device Name",
    0x2A01: "Appearance",
    0x2A02: "Peripheral Privacy Flag",
    0x2A03: "Reconnection Address",
    0x2A04: "Peripheral Preferred Connection Parameters",
    0x2A05: "Service Changed",
    0x2A06: "Alert Level",
    0x2A07: "Tx Power Level",
    0x2A08: "Date Time",
    0x2A09: "Day of Week",
    0x2A0A: "Day Date Time",
    0x2A0B: "Exact Time 100",
    0x2A0C: "Exact Time 256",
    0x2A0D: "DST Offset",
    0x2A0E: "Time Zone",
    0x2A0F: "Local Time Information",
    0x2A10: "Secondary Time Zone",
    0x2A11: "Time with DST",
    0x2A12: "Time Accuracy",
    0x2A13: "Time Source",
    0x2A14: "Reference Time Information",
    0x2A15: "Time Broadcast",
    0x2A16: "Time Update Control Point",
    0x2A17: "Time Update State",
    0x2A18: "Glucose Measurement",
    0x2A19: "Battery Level",
    0x2A1A: "Battery Power State",
    0x2A1B: "Battery Level State",
    0x2A1C: "Temperature Measurement",
    0x2A1D: "Temperature Type",
    0x2A1E: "Intermediate Temperature",
    0x2A1F: "Temperature Celsius",
    0x2A20: "Temperature Fahrenheit",
    0x2A21: "Measurement Interval",
    0x2A22: "Boot Keyboard Input Report",
    0x2A23: "System ID",
    0x2A24: "Model Number String",
    0x2A25: "Serial Number String",
    0x2A26: "Firmware Revision String",
    0x2A27: "Hardware Revision String",
    0x2A28: "Software Revision String",
    0x2A29: "Manufacturer Name String",
    0x2A2A: "IEEE 11073-20601 Regulatory Certification Data List",
    0x2A2B: "Current Time",
    0x2A2C: "Magnetic Declination",
    0x2A2D: "Latitude",
    0x2A2E: "Longitude",
    0x2A2F: "Position 2D",
    0x2A30: "Position 3D",
    0x2A31: "Scan Refresh",
    0x2A32: "Boot Keyboard Output Report",
    0x2A33: "Boot Mouse Input Report",
    0x2A34: "Glucose Measurement Context",
    0x2A35: "Blood Pressure Measurement",
    0x2A36: "Intermediate Cuff Pressure",
    0x2A37: "Heart Rate Measurement",
    0x2A38: "Body Sensor Location",
    0x2A39: "Heart Rate Control Point",
    0x2A3A: "Removable",
    0x2A3B: "Service Required",
    0x2A3C: "Scientific Temperature Celsius",
    0x2A3D: "String",
    0x2A3E: "Network Availability",
    0x2A3F: "Alert Status",
    0x2A40: "Ringer Control point",
    0x2A41: "Ringer Setting",
    0x2A42: "Alert Category ID Bit Mask",
    0x2A43: "Alert Category ID",
    0x2A44: "Alert Notification Control Point",
    0x2A45: "Unread Alert Status",
    0x2A46: "New Alert",
    0x2A47: "Supported New Alert Category",
    0x2A48: "Supported Unread Alert Category",
    0x2A49: "Blood Pressure Feature",
    0x2A4A: "HID Information",
    0x2A4B: "Report Map",
    0x2A4C: "HID Control Point",
    0x2A4D: "Report",
    0x2A4E: "Protocol Mode",
    0x2A4F: "Scan Interval Window",
    0x2A50: "PnP ID",
    0x2A51: "Glucose Feature",
    0x2A52: "Record Access Control Point",
    0x2A53: "RSC Measurement",
    0x2A54: "RSC Feature",
    0x2A56: "Digital",
    0x2A55: "SC Control Point",
    0x2A57: "Digital Output",
    0x2A58: "Analog",
    0x2A59: "Analog Output",
    0x2A5A: "Aggregate",
    0x2A5B: "CSC Measurement",
    0x2A5C: "CSC Feature",
    0x2A5D: "Sensor Location",
    0x2A5E: "PLX Spot-Check Measurement",
    0x2A5F: "PLX Continuous Measurement Characteristic",
    0x2A60: "PLX Features",
    0x2A62: "Pulse Oximetry Control Point",
    0x2A63: "Cycling Power Measurement",
    0x2A64: "Cycling Power Vector",
    0x2A65: "Cycling Power Feature",
    0x2A66: "Cycling Power Control Point",
    0x2A67: "Location and Speed Characteristic",
    0x2A68: "Navigation",
    0x2A69: "Position Quality",
    0x2A6A: "LN Feature",
    0x2A6B: "LN Control Point",
    0x2A6C: "Elevation",
    0x2A6D: "Pressure",
    0x2A6E: "Temperature",
    0x2A6F: "Humidity",
    0x2A70: "True Wind Speed",
    0x2A71: "True Wind Direction",
    0x2A72: "Apparent Wind Speed",
    0x2A73: "Apparent Wind Direction",
    0x2A74: "Gust Factor",
    0x2A75: "Pollen Concentration",
    0x2A76: "UV Index",
    0x2A77: "Irradiance",
    0x2A78: "Rainfall",
    0x2A79: "Wind Chill",
    0x2A7A: "Heat Index",
    0x2A7B: "Dew Point",
    0x2A7D: "Descriptor Value Changed",
    0x2A7E: "Aerobic Heart Rate Lower Limit",
    0x2A7F: "Aerobic Threshold",
    0x2A80: "Age",
    0x2A81: "Anaerobic Heart Rate Lower Limit",
    0x2A82: "Anaerobic Heart Rate Upper Limit",
    0x2A83: "Anaerobic Threshold",
    0x2A84: "Aerobic Heart Rate Upper Limit",
    0x2A85: "Date of Birth",
    0x2A86: "Date of Threshold Assessment",
    0x2A87: "Email Address",
    0x2A88: "Fat Burn Heart Rate Lower Limit",
    0x2A89: "Fat Burn Heart Rate Upper Limit",
    0x2A8A: "First Name",
    0x2A8B: "Five Zone Heart Rate Limits",
    0x2A8C: "Gender",
    0x2A8D: "Heart Rate Max",
    0x2A8E: "Height",
    0x2A8F: "Hip Circumference",
    0x2A90: "Last Name",
    0x2A91: "Maximum Recommended Heart Rate",
    0x2A92: "Resting Heart Rate",
    0x2A93: "Sport Type for Aerobic and Anaerobic Thresholds",
    0x2A94: "Three Zone Heart Rate Limits",
    0x2A95: "Two Zone Heart Rate Limit",
    0x2A96: "VO2 Max",
    0x2A97: "Waist Circumference",
    0x2A98: "Weight",
    0x2A99: "Database Change Increment",
    0x2A9A: "User Index",
    0x2A9B: "Body Composition Feature",
    0x2A9C: "Body Composition Measurement",
    0x2A9D: "Weight Measurement",
    0x2A9E: "Weight Scale Feature",
    0x2A9F: "User Control Point",
    0x2AA0: "Magnetic Flux Density - 2D",
    0x2AA1: "Magnetic Flux Density - 3D",
    0x2AA2: "Language",
    0x2AA3: "Barometric Pressure Trend",
    0x2AA4: "Bond Management Control Point",
    0x2AA5: "Bond Management Features",
    0x2AA6: "Central Address Resolution",
    0x2AA7: "CGM Measurement",
    0x2AA8: "CGM Feature",
    0x2AA9: "CGM Status",
    0x2AAA: "CGM Session Start Time",
    0x2AAB: "CGM Session Run Time",
    0x2AAC: "CGM Specific Ops Control Point",
    0x2AAD: "Indoor Positioning Configuration",
    0x2AAE: "Latitude",
    0x2AAF: "Longitude",
    0x2AB0: "Local North Coordinate",
    0x2AB1: "Local East Coordinate",
    0x2AB3: "Altitude",
    0x2AB4: "Uncertainty",
    0x2AB5: "Location Name",
    0x2AB6: "URI",
    0x2ABC: "TDS Control Point",
    0x2ABD: "OTS Feature",
    0x2ABE: "Object Name",
    0x2ABF: "Object Type",
    0x2AC0: "Object Size",
    0x2AC1: "Object First-Created",
    0x2AC2: "Object Last-Modified",
    0x2AC3: "Object ID",
    0x2AC4: "Object Properties",
    0x2AC5: "Object Action Control Point",
    0x2AC6: "Object List Control Point",
    0x2AC7: "Object List Filter",
    0x2AC8: "Object Changed",
    0x2AC9: "Resolvable Private Address Only",
    0x2ACE: "Cross Trainer Data",
    0x2AD9: "Fitness Machine Control Point",
    0x2ACC: "Fitness Machine Feature",
    0x2ACD: "Treadmill Data",
    0x2ACF: "Step Climber Data",
    0x2AB2: "Floor Number",
    0x2AB7: "HTTP Headers",
    0x2AB8: "HTTP Status Code",
    0x2AB9: "HTTP Entity Body",
    0x2ABA: "HTTP Control Point",
    0x2ABB: "HTTPS Security",
    0x2AC9: "Resolvable Private Address Only",
    0x2AD0: "Stair Climber Data",
    0x2AD1: "Rower Data",
    0x2AD2: "Indoor Bike Data",
    0x2AD3: "Training Status",
    0x2AD4: "Supported Speed Range",
    0x2AD5: "Supported Inclination Range",
    0x2AD6: "Supported Resistance Level Range",
    0x2AD7: "Supported Heart Rate Range",
    0x2AD8: "Supported Power Range",
    0x2ADA: "Fitness Machine Status",
    0x2ADB: "Mesh Provisioning Data In",
    0x2ADC: "Mesh Provisioning Data Out",
    0x2ADD: "Mesh Proxy Data In",
    0x2ADE: "Mesh Proxy Data Out",
    0x2B1D: "RC Feature",
    0x2B1E: "RC Settings",
    0x2B1F: "Reconnection Configuration Control Point",
    0x2B29: "Client Supported Features",
    0x2B2A: "Database Hash",
    0x2B3A: "Server Supported Features",
};
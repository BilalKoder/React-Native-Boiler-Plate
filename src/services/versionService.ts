import VersionInfo from 'react-native-version-info';

const versionService = {
    getVersionNumber
}

function getVersionNumber() {
    return VersionInfo.appVersion
}

export default versionService;
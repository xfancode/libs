// oshelper.js by xFaN
const oshelper = (function() {
    const ua = navigator.userAgent;
    const uaData = navigator.userAgentData || null;

    return {
        getUA: () => ua,

        getOS: () => {
            if (ua.includes('Windows')) return 'Windows';
            if (ua.includes('Mac OS')) return 'macOS';
            if (ua.includes('Linux')) return 'Linux';
            if (ua.includes('Android')) return 'Android';
            if (/iPhone|iPad|iPod/.test(ua)) return 'iOS';
            if (uaData && uaData.platform) return uaData.platform;
            return 'Unknown';
        },

        getProduct: () => navigator.product || 'Unknown',

        getProcCores: () => navigator.hardwareConcurrency || 'Unknown',
        
        getRam: () => navigator.deviceMemory || 'Unknown',

        isMobile: () => {
            if (uaData) return uaData.mobile;
            return /Mobi|Android|iPhone|iPad|iPod/i.test(ua);
        },

        getPlatformString: () => {
            if (uaData && uaData.platform) return uaData.platform;
            return navigator.platform || 'Unknown';
        },

        getLang: () => navigator.language || 'Unknown',

        isOnline: () => navigator.onLine,

        getG: () => {
            if (navigator.connection) {
                return navigator.connection.effectiveType || 'Unknown';
            }
            return 'Unknown';
        },

        cookie: () => navigator.cookieEnabled,

        getFullInfo: () => ({
            userAgent: ua,
            os: oshelper.getOS(),
            product: oshelper.getProduct(),
            cpuCores: oshelper.getProcCores(),
            ramGB: oshelper.getRam(),
            isMobile: oshelper.isMobile(),
            platformString: oshelper.getPlatformString(),
            language: oshelper.getLang(),
            isOnline: oshelper.isOnline(),
            connectionType: oshelper.getG(),
            cookiesEnabled: oshelper.cookie()
        })
    };
})();
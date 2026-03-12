import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

// UNPRI Color Palette
const COLORS = {
  bg: "#0d0d0d",
  card: "#141414",
  cardBorder: "#222222",
  red: "#cc2229",
  yellow: "#f5c800",
  purple: "#5b2d8e",
  white: "#ffffff",
  textMuted: "#666666",
  chip: "#1c1c1c",
  chipBorder: "#282828",
  divider: "#1e1e1e",
};

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.bg} />

      <View style={styles.container}>
        {/* Header Label */}
        <View style={styles.headerLabel}>
          <View style={[styles.headerDot, { backgroundColor: COLORS.red }]} />
          <Text style={styles.headerLabelText}>KARTU IDENTITAS DIGITAL</Text>
          <View style={[styles.headerDot, { backgroundColor: COLORS.yellow }]} />
        </View>

        {/* Main Card */}
        <View style={styles.card}>

          {/* Red Accent Bar */}
          <View style={styles.accentBar} />

          {/* University Badge */}
          <View style={styles.universityRow}>
            <View style={styles.universityIconBox}>
              <Image
                source={require("../../assets/images/logo.jpg")}
                style={styles.universityLogo}
                resizeMode="contain"
              />
            </View>
            <View style={styles.universityTextBlock}>
              <Text style={styles.universityName}>UNIVERSITAS PRIMA INDONESIA</Text>
              <Text style={styles.universityTagline}>
                Excellence in Education
              </Text>
            </View>
          </View>

          {/* Divider */}
          <View style={styles.divider} />

          {/* Profile Section */}
          <View style={styles.profileSection}>
            {/* Avatar */}
            <View style={styles.avatarWrapper}>
              <View style={styles.avatarRing}>
                <Image
                  source={require("../../assets/images/profile.jpg")}
                  style={styles.avatar}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.badgeDot} />
            </View>

            {/* Identity Info */}
            <View style={styles.infoBlock}>
              <Text style={styles.nameLabel}>NAMA MAHASISWA</Text>
              <Text style={styles.nameText}>Mey Claudya Silalahi</Text>

              <View style={styles.infoChipNIM}>
                <Text style={styles.infoChipLabel}>NIM</Text>
                <Text style={styles.infoChipValue}>243303621293</Text>
              </View>

              <View style={styles.infoChipJurusan}>
                <Text style={styles.infoChipLabel}>JURUSAN</Text>
                <Text style={styles.infoChipValue}>Sistem Informasi</Text>
              </View>
            </View>
          </View>

          {/* Divider */}
          <View style={styles.divider} />

          {/* Quote Section */}
          <View style={styles.quoteSection}>
            <Text style={styles.quoteSymbol}>"</Text>
            <Text style={styles.quoteText}>
              "Carpe diem. Seize the day, boys. Make your lives extraordinary." — John Keating
            </Text>
          </View>

          {/* Card Footer */}
          <View style={styles.cardFooter}>
            <View style={[styles.footerDot, { backgroundColor: COLORS.red }]} />
            <View style={[styles.footerDot, styles.footerDotWide, { backgroundColor: COLORS.yellow }]} />
            <View style={[styles.footerDot, { backgroundColor: COLORS.purple }]} />
          </View>

        </View>

        {/* Bottom Tagline */}
        <Text style={styles.bottomTagline}>
          Aktif · Tahun Akademik 2025/2026
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    backgroundColor: COLORS.bg,
  },

  // Header Label
  headerLabel: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 20,
    paddingHorizontal: 16,
    paddingVertical: 7,
    backgroundColor: "#181818",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#272727",
  },
  headerLabelText: {
    color: "#777",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 3,
  },
  headerDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },

  // Card
  card: {
    width: width - 48,
    backgroundColor: COLORS.card,
    borderRadius: 22,
    paddingBottom: 22,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.7,
    shadowRadius: 28,
    elevation: 20,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
    overflow: "hidden",
  },

  // Red accent bar
  accentBar: {
    height: 4,
    backgroundColor: COLORS.red,
  },

  // University Row
  universityRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 16,
    gap: 12,
  },
  universityIconBox: {
    width: 48,
    height: 48,
    backgroundColor: COLORS.white,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  universityLogo: {
    width: 44,
    height: 44,
    borderRadius: 10,
  },
  universityTextBlock: {
    flex: 1,
  },
  universityName: {
    color: COLORS.white,
    fontSize: 10.5,
    fontWeight: "800",
    letterSpacing: 1.2,
  },
  universityTagline: {
    color: COLORS.textMuted,
    fontSize: 9,
    letterSpacing: 0.8,
    marginTop: 3,
  },

  // Divider
  divider: {
    height: 1,
    backgroundColor: COLORS.divider,
    marginHorizontal: 20,
  },

  // Profile Section
  profileSection: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingHorizontal: 20,
    paddingVertical: 22,
    gap: 18,
  },

  // Avatar
  avatarWrapper: {
    position: "relative",
  },
  avatarRing: {
    width: 82,
    height: 82,
    borderRadius: 41,
    borderWidth: 2,
    borderColor: COLORS.yellow,
    padding: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },

  badgeDot: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 13,
    height: 13,
    borderRadius: 7,
    backgroundColor: COLORS.red,
    borderWidth: 2,
    borderColor: COLORS.card,
  },

  // Info Block
  infoBlock: {
    flex: 1,
    gap: 9,
  },
  nameLabel: {
    color: COLORS.textMuted,
    fontSize: 8.5,
    fontWeight: "700",
    letterSpacing: 2,
  },
  nameText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.2,
    lineHeight: 21,
  },
  infoChipNIM: {
    backgroundColor: COLORS.chip,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: COLORS.chipBorder,
    borderLeftWidth: 3,
    borderLeftColor: COLORS.red,
  },
  infoChipJurusan: {
    backgroundColor: COLORS.chip,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: COLORS.chipBorder,
    borderLeftWidth: 3,
    borderLeftColor: COLORS.purple,
  },
  infoChipLabel: {
    color: COLORS.textMuted,
    fontSize: 7.5,
    fontWeight: "700",
    letterSpacing: 1.5,
    marginBottom: 2,
  },
  infoChipValue: {
    color: "#d8d8d8",
    fontSize: 11,
    fontWeight: "600",
    letterSpacing: 0.4,
  },

  // Quote Section
  quoteSection: {
    paddingHorizontal: 20,
    paddingVertical: 18,
  },
  quoteSymbol: {
    color: COLORS.yellow,
    fontSize: 30,
    fontWeight: "900",
    lineHeight: 26,
    marginBottom: 4,
  },
  quoteText: {
    color: "#6a6a6a",
    fontSize: 12.5,
    fontStyle: "italic",
    lineHeight: 19,
    letterSpacing: 0.2,
  },

  // Card Footer
  cardFooter: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    paddingTop: 6,
  },
  footerDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  footerDotWide: {
    width: 20,
    borderRadius: 3,
  },

  // Bottom Tagline
  bottomTagline: {
    marginTop: 18,
    color: "#3d3d3d",
    fontSize: 10.5,
    letterSpacing: 1.5,
    fontWeight: "500",
  },
});
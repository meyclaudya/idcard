import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Linking,
  Image,
} from 'react-native';

const COLORS = {
  bg: '#0d0d0d',
  card: '#141414',
  cardBorder: '#222222',
  red: '#cc2229',
  yellow: '#f5c800',
  white: '#ffffff',
  textMuted: '#666666',
  divider: '#1e1e1e',
  chip: '#1c1c1c',
};

function SectionLabel({ text }: { text: string }) {
  return (
    <View style={styles.sectionLabel}>
      <View style={styles.sectionDot} />
      <Text style={styles.sectionLabelText}>{text}</Text>
    </View>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.infoRow}>
      <Text style={styles.infoLabel}>{label}</Text>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
  );
}

function ContactItem({
  icon,
  label,
  value,
  onPress,
}: {
  icon: string;
  label: string;
  value: string;
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity
      style={styles.contactCard}
      onPress={onPress}
      activeOpacity={onPress ? 0.7 : 1}>
      <View style={styles.contactIconBox}>
        <Text style={styles.contactIcon}>{icon}</Text>
      </View>
      <View style={styles.contactTextBlock}>
        <Text style={styles.contactLabel}>{label}</Text>
        <Text style={[styles.contactValue, onPress && { color: COLORS.red }]}>{value}</Text>
      </View>
      {onPress && <Text style={styles.contactArrow}>›</Text>}
    </TouchableOpacity>
  );
}

export default function ExploreScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.bg} />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>

        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerAccentBar} />
          <View style={styles.headerTextBlock}>
            <Text style={styles.headerEyebrow}>UNIVERSITAS PRIMA INDONESIA</Text>
            <Text style={styles.headerTitle}>Tentang</Text>
            <Text style={styles.headerSubtitle}>Profil, kontak & lokasi kampus</Text>
          </View>
        </View>

        {/* About Card */}
        <SectionLabel text="PROFIL SINGKAT" />
        <View style={styles.card}>
          <View style={styles.aboutHeader}>
            <View style={styles.aboutIconBox}>
              <Image
                source={require('../../assets/images/logo.jpg')}
                style={styles.aboutLogo}
                resizeMode="contain"
              />
            </View>
            <View style={styles.aboutTitleBlock}>
              <Text style={styles.aboutTitle}>Universitas Prima Indonesia</Text>
              <Text style={styles.aboutSub}>Medan, Sumatera Utara</Text>
            </View>
          </View>
          <View style={styles.cardDivider} />
          <Text style={styles.aboutDesc}>
            Universitas Prima Indonesia (UNPRI) adalah perguruan tinggi swasta terkemuka di Medan,
            Sumatera Utara. Berdiri dengan visi menjadi universitas unggul, inovatif, dan
            berkarakter, UNPRI menawarkan berbagai program studi dari jenjang sarjana hingga
            spesialis di berbagai bidang ilmu.
          </Text>
        </View>

        {/* Detail Card */}
        <View style={[styles.card, { marginTop: 8 }]}>
          <InfoRow label="Status" value="Perguruan Tinggi Swasta" />
          <View style={styles.rowDivider} />
          <InfoRow label="Akreditasi" value="Terakreditasi BAN-PT" />
          <View style={styles.rowDivider} />
          <InfoRow label="Fakultas" value="8 Fakultas" />
          <View style={styles.rowDivider} />
          <InfoRow label="Program Studi" value="19+ Program Studi" />
          <View style={styles.rowDivider} />
          <InfoRow label="Jenjang" value="S1 – Spesialis" />
        </View>

        {/* Visi Misi */}
        <View style={[styles.card, { marginTop: 8 }]}>
          <Text style={styles.visiLabel}>VISI</Text>
          <Text style={styles.visiText}>
            Menjadi universitas unggul, inovatif, dan berkarakter di tingkat nasional maupun
            internasional.
          </Text>
          <View style={styles.cardDivider} />
          <Text style={styles.visiLabel}>MISI</Text>
          <Text style={styles.visiText}>
            Menyelenggarakan pendidikan berkualitas, mengembangkan penelitian inovatif, dan
            melaksanakan pengabdian kepada masyarakat untuk kemajuan bangsa.
          </Text>
        </View>

        {/* Kontak & Lokasi */}
        <View style={styles.sectionGap} />
        <SectionLabel text="KONTAK & LOKASI" />
        <View style={styles.contactList}>
          <ContactItem
            icon="📍"
            label="Alamat"
            value="Jalan Sampul No. 3, Kelurahan Sei Putih Barat, Kecamatan Medan Petisah, Kota Medan, Sumatera Utara"
          />
          <ContactItem
            icon="📞"
            label="Telepon"
            value="(061) 8455055"
            onPress={() => Linking.openURL('tel:0618455055')}
          />
          <ContactItem
            icon="🌐"
            label="Website"
            value="www.unprimdn.ac.id"
            onPress={() => Linking.openURL('https://www.unprimdn.ac.id')}
          />
          <ContactItem
            icon="✉️"
            label="Email"
            value="info@unprimdn.ac.id"
            onPress={() => Linking.openURL('mailto:info@unprimdn.ac.id')}
          />
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <View style={styles.footerBadge}>
            <View style={styles.footerDot} />
            <Text style={styles.footerText}>UNPRI · Medan, Sumatera Utara</Text>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  scroll: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 48,
  },

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 14,
    paddingTop: 32,
    paddingBottom: 24,
  },
  headerAccentBar: {
    width: 4,
    minHeight: 70,
    backgroundColor: COLORS.red,
    borderRadius: 2,
    marginTop: 4,
  },
  headerTextBlock: { flex: 1 },
  headerEyebrow: {
    color: COLORS.textMuted,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 2,
    marginBottom: 6,
  },
  headerTitle: {
    color: COLORS.white,
    fontSize: 34,
    fontWeight: '800',
    letterSpacing: -0.5,
    lineHeight: 38,
  },
  headerSubtitle: {
    color: COLORS.textMuted,
    fontSize: 13,
    marginTop: 6,
  },

  // Section Label
  sectionLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 10,
  },
  sectionDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: COLORS.red,
  },
  sectionLabelText: {
    color: COLORS.textMuted,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 2.5,
  },
  sectionGap: { height: 16 },

  // Card
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
    padding: 16,
    marginBottom: 0,
  },
  cardDivider: {
    height: 1,
    backgroundColor: COLORS.divider,
    marginVertical: 14,
  },

  // About
  aboutHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    marginBottom: 4,
  },
  aboutIconBox: {
    width: 52,
    height: 52,
    backgroundColor: COLORS.white,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  aboutLogo: {
    width: 48,
    height: 48,
  },
  aboutTitleBlock: { flex: 1 },
  aboutTitle: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 20,
  },
  aboutSub: {
    color: COLORS.textMuted,
    fontSize: 11,
    marginTop: 2,
  },
  aboutDesc: {
    color: COLORS.textMuted,
    fontSize: 12.5,
    lineHeight: 20,
    letterSpacing: 0.2,
  },

  // Info Rows
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  infoLabel: {
    color: COLORS.textMuted,
    fontSize: 12,
    fontWeight: '500',
  },
  infoValue: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: '600',
  },
  rowDivider: {
    height: 1,
    backgroundColor: COLORS.divider,
  },

  // Visi Misi
  visiLabel: {
    color: COLORS.red,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 2,
    marginBottom: 6,
  },
  visiText: {
    color: COLORS.textMuted,
    fontSize: 12.5,
    lineHeight: 20,
    letterSpacing: 0.2,
  },

  // Contact
  contactList: {
    gap: 8,
  },
  contactCard: {
    backgroundColor: COLORS.card,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    gap: 12,
  },
  contactIconBox: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.chip,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contactIcon: { fontSize: 18 },
  contactTextBlock: { flex: 1 },
  contactLabel: {
    color: COLORS.textMuted,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1.5,
    marginBottom: 3,
  },
  contactValue: {
    color: COLORS.white,
    fontSize: 12.5,
    fontWeight: '500',
    lineHeight: 18,
  },
  contactArrow: {
    color: COLORS.textMuted,
    fontSize: 20,
    fontWeight: '300',
  },

  // Footer
  footer: {
    marginTop: 32,
    alignItems: 'center',
  },
  footerBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: COLORS.card,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
  },
  footerDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: COLORS.red,
  },
  footerText: {
    color: COLORS.textMuted,
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 1.5,
  },
});
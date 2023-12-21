import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#F0F4F8',
    padding: 20,
  },
  section: {
    margin: 10,
    padding: 20,
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
  },
  header: {
    fontSize: 26,
    fontWeight: 'small',
    marginBottom: 20,
    color: '#2C3E50',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  label: {
    fontWeight: 'bold',
    color: '#34495E',
    fontSize: 14,
  },
  value: {
    color: '#2C3E50',
    fontSize: 14,
  },
  paidMonths: {
    marginTop: 20,
    fontSize: 16,
    color: '#2ECC71',
  },
});

const PrintableInvoice = ({ apartment }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.header}>facture pour paiement d'appartement numéro{apartment.number}</Text>
        <Text style={styles.header}>--------------------------- </Text>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Client:</Text>
          <Text style={styles.value}>{apartment.client}</Text>
        </View>
        
        <View style={styles.detailRow}>
          <Text style={styles.label}>Payment Status:</Text>
          <Text style={styles.value}>{apartment.paidMonths.includes(new Date().toLocaleString('en', { month: 'long', year: 'numeric' })) ? 'Paid' : 'Not Paid'}</Text>
        </View>
        
        <View style={styles.detailRow}>
          <Text style={styles.label}>Date:</Text>
          <Text style={styles.value}>{apartment.date}</Text>
        </View>
        
        {apartment.paidMonths.length > 0 && (
          <Text style={styles.paidMonths}>
            Paid Months: {apartment.paidMonths.join(', ')}
          </Text>
        )}
      </View>
    </Page>
  </Document>
);

export default PrintableInvoice;

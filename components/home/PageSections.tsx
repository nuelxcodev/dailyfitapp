import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Tabheader from "../headers/Tabheader";

interface PageSectionsProps {
  data: any[];
  headeritem?: () => React.ReactNode;
  footeritem?: () => React.ReactNode;
  carditem: (item: any) => React.ReactNode;
}

const PageSections: React.FC<PageSectionsProps> = ({ data, headeritem, footeritem, carditem }) => {
  return (
    <View style={{ flex: 1 }}>
      <Tabheader />
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={
          headeritem ? (
            <>
              {headeritem()}
              <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Recent Invoices</Text>
                <TouchableOpacity>
                  <Text style={styles.viewAll}>View All</Text>
                </TouchableOpacity>
              </View>
            </>
          ) : null
        }
        ListFooterComponent={footeritem ? <>{footeritem()}</> : null}
        renderItem={({ item }) => carditem({ item }) as any}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No Data Available</Text>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  viewAll: {
    color: "purple",
    fontSize: 14,
    textDecorationLine: "underline",
  },
  emptyContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  emptyText: {
    color: "red",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default PageSections;

import i18n from "i18next";
// @ts-ignore
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          //Personal Information Page
          personal_information: "Personal Information",
          firstname: "First Name",
          type_here: "Type here",
          surname: "Last Name",
          gender: "Gender",
          female: "Female",
          male: "Male",
          date_of_birth: "Date of Birth",
          expected_age: "Expected Age",
          currency: "Currency",
          eur: "Euro",
          vnd: "Vietnamese Dong",
          save_and_proceed: "Save and Proceed",

          //Starting Capital Page
          starting_capital: "Starting Capital",

          //Assets
          activa: "Assets",

          //Liquid Assets
          liquid_assets: "Liquid Assets",
          cash: "Cash",
          checking: "Available",
          savings: "Savings",
          other: "Other",
          preciousMetals: "Precious Metal",
          gold: "Gold",

          //Real Estate
          realestate: "Real Estate",
          occupied_properties: "Occupied Properties",
          rented_properties: "Rented Properties",
          commercial_properties: "Commercial Properties",
          agricultural_land_forest: "Agricultural Land Forest",
          forest: "Forest",
          agricultural_land: "Agricultural Land",
          funds: "Funds",
          real_estate_funds: "Real Estate Funds",

          //Stocks
          stocks: "Stocks",
          single_stocks: "Single Stocks",
          stock_funds: "Stocks Funds",
          fund: "Fund",
          etf: "ETF",
          derivative: "Derivative",
          corporate_participation: "Corporate Participation",
          active_corporate_participation: "Active Corporate Participation",
          passive_corporate_participation: "Passive Corporate Participation",

          //Cryptocurrency
          crypto_currency: "Cryptocurrency",
          bitcoin: "Bitcoin",
          ethereum: "Ethereum",

          //Other Assets
          other_assets: "Other Assets",
          art: "Art",
          collectibles: "Collectibles",
          claims: "Claims",
          insurance: "Insurance",

          //Liabilities
          passiva: "Liabilities",
          object_related_liabilities: "Object Related Liabilities",
          non_object_related_liabilities: "Non-object Related Liabilities",
          other_liabilities: "Other Liabilities",

          //Reserved Equity
          reserved_equity: "Reserved Equity",
          reserved_equity_for_consumption: "Reserved Equity for Consumption",
          reserved_equity_for_pension_provision:
            "Reserved Equity for Pension Provision",
          reserved_equity_for_other: "Reserved Equity for Other",

          //Balance Sheet
          starting_capital_display: "Starting Capital Display",
          liabilities: "Liabilities",
          Active: "Assets",
          balance_sheet: "Balance Sheet",
          crypto: "Crypto",
          reservedEquity: "Reserved Equity",
          total_capital: "Total Capital",

          //Save
          save_activa: "Save Assets",
          save_passiva: "Save Liabilities",
          save_starting_capital: "Save Starting Capital",

          //Life Phases Page
          lifephases: "Life Phases",
          life_phases: "Life Phases",
          no_life_phases: "Number of Life Phases",
          new_life_phase: "New Life Phase",
          selected_lifephase: "Selected Life Phase",
          name_of_phase: "Phase Name",
          start_of_phase: "Phase Start",
          end_of_phase: "Phase End",
          income: "Income",
          expenses: "Expenses",
          life_phase_graph: "Life Phase Graph",
          create_lifephases_first: "Create Life Phases First",
          save_proceed: "Save",
          cancel_clear: "Clear",

          //Add New Life Phase
          new_lifephase: "New Life Phase",
          //Income
          dependent: "Dependent",
          selfemployed: "Self-Employed",
          rentingIncome: "Renting Income",
          capitalIncome: "Capital Income",
          pensionIncome: "Pension Income",
          otherIncome: "Other Income",
          back: "Back",

          //Expenses
          taxes: "Taxes",
          rent: "Rent",
          consumption: "Consumption",
          Insurance: "Insurance",
          interest: "Interest",
          socialSecurity: "Social Security",
          maintenance: "Maintenance",
          otherCosts: "Other Costs",

          //Summary
          summary: "Summary",
          save: "Save",
          cancel: "Cancel",
          all_phases_successfully_set: "All Phases Successfully Set",

          //Point of Freedom Page
          pof: "Point of Financial Freedom",
          inflationrate: "Inflation Rate",
          expectedgrowth: "Expected Growth",
          pof_title: "Point of Financial Freedom",
          pof_achieved: "Point of Financial Freedom achieved at the age of",
          pof_achieved_age: "",
          recalculate_pof: "Recalculate PoF",

          //Custom Asset
          enter_custom_asset_allocation: "Custom Asset Allocation",
          precious_metals: "Precious Metals",
          real_estate: "Real Estate",

          optimisation: "Optimization",
          income_costs: "Income and Costs",
        },
      },

      de: {
        translation: {
          //Personal Information Page
          personal_information: "Persönliche Informationen",
          firstname: "Vorname",
          type_here: "Hier eingeben",
          surname: "Nachname",
          gender: "Geschlecht",
          female: "Frau",
          male: "Mann",
          date_of_birth: "Geburtsdatum",
          expected_age: "Erwartetes Alter",
          currency: "Währung",
          eur: "Euro",
          vnd: "Vietnamesischer Dong",
          save_and_proceed: "Speichern und Fortfahren",

          //Starting Capital Page
          starting_capital: "Startkapital",

          //Assets
          activa: "Vermögenswerte",

          //Liquid Assets
          liquid_assets: "Flüssige Mittel",
          cash: "Kasse",
          checking: "Verfügbar",
          savings: "Überprüfung",
          other: "Andere",
          preciousMetals: "Edelmetall",
          gold: "Gold",

          //Real Estatee
          realestate: "Immobilie",
          occupied_properties: "Bewohnte Grundstücke",
          rented_properties: "Vermietete Immobilien",
          commercial_properties: "Gewerbeimmobilien",
          agricultural_land_forest: "Landwirtschaftlicher Landwald",
          forest: "Wald",
          agricultural_land: "Agrarland",
          funds: "Mittel",
          real_estate_funds: "Immobilienfonds",

          //Stocks
          stocks: "Aktien",
          single_stocks: "Einzelne Aktien",
          stock_funds: "Aktienfonds",
          fund: "Mittel",
          etf: "ETF",
          derivative: "Derivat",
          corporate_participation: "Unternehmensbeteiligung",
          active_corporate_participation: "Aktive Unternehmensbeteiligung",
          passive_corporate_participation: "Passive Unternehmensbeteiligung",

          //Cryptocurrency
          crypto_currency: "Kryptowährung",
          bitcoin: "Bitcoin",
          ethereum: "Ethereum",

          //Other Assets
          other_assets: "Sonstige Vermögensgegenstände",
          art: "Kunst",
          collectibles: "Sammlerstücke",
          claims: "Ansprüche",
          insurance: "Versicherung",

          //Liabilities
          passiva: "Verbindlichkeiten",
          object_related_liabilities: "Objektbezogene Verbindlichkeiten",
          non_object_related_liabilities:
            "Nicht objektbezogene Verbindlichkeiten",
          other_liabilities: "Sonstige Verbindlichkeiten",

          //Reserved Equity
          reserved_equity: "Reserviertes Eigenkapital",
          reserved_equity_for_consumption:
            "Reserviertes Eigenkapital für den Konsum",
          reserved_equity_for_pension_provision:
            "Reserviertes Eigenkapital für die Altersvorsorge",
          reserved_equity_for_other: "Reserviertes Eigenkapital für Andere",

          //Balance Sheet
          starting_capital_display: "Sparen Großbuchstabenanzeige ",
          liabilities: "Verbindlichkeiten",
          Active: "Vermögenswerte",
          balance_sheet: "Bilanz",
          crypto: "Krypto",
          reservedEquity: "Reserviertes Eigenkapital",
          total_capital: "Gesamtkapital",

          //Save
          save_activa: "Vermögen Sichern",
          save_passiva: "Sparen Verbindlichkeiten",
          save_starting_capital: "Sparen Startkapital",

          //Life Phases Page
          lifephases: "Lebensphasen",
          life_phases: "Lebensphasen",
          no_life_phases: "Lebenspasen Nummer",
          new_life_phase: "Neue Lebenspasen",
          selected_lifephase: "Ausgewählte Lebensphase",
          name_of_phase: "Lebensphase Name",
          start_of_phase: "Lebensphase Beginn",
          end_of_phase: "Lebensphase Ende",
          income: "Einkommen",
          expenses: "Kosten",
          life_phase_graph: "Lebensphase Graph",
          create_lifephases_first: "Erstellen Sie zunächst Lebensphasen",
          save_proceed: "Speichern",
          cancel_clear: "Klären",

          //Add New Life Phase
          new_lifephase: "Neue Lebenspasen",
          //Income
          dependent: "Abhängig",
          selfemployed: "Selbstständig",
          rentingIncome: "Mieteinnahmen",
          capitalIncome: "Kapitaleinkommen",
          pensionIncome: "Renteneinkommen",
          otherIncome: "Anderes Einkommen",
          back: "Zurücksetzen",

          //Expenses
          taxes: "Steuern",
          rent: "Mieten",
          consumption: "Verbrauch",
          Insurance: "Versicherung",
          interest: "Interesse",
          socialSecurity: "Soziale Sicherheit",
          maintenance: "Wartung",
          otherCosts: "Sonstige Kosten",

          //Summary
          summary: "Zusammenfassung",
          save: "Speichern",
          cancel: "Stornieren",
          all_phases_successfully_set: "Alle Phasen erfolgreich eingestellt",

          //Point of Freedom Page
          pof: "Punkt der finanziellen Freiheit",
          inflationrate: "Inflationsrate",
          expectedgrowth: "Erwartetes Wachstum",
          pof_title: "Punkt der finanziellen Freiheit",
          pof_achieved: "Punkt der finanziellen Freiheit erreicht im Alter von",
          pof_achieved_age: "",
          recalculate_pof: "PoF neu berechnen",

          //Custom Asset
          enter_custom_asset_allocation:
            "Benutzerdefinierte Vermögenszuteilung",
          precious_metals: "Edelmetalle",
          real_estate: "Immobilie",

          income_costs: "Einkommen und Kosten",
          optimisation: "Optimierung",
        },
      },
      vn: {
        translation: {
          //Personal Information Page
          personal_information: "Thông Tin Cá Nhân",
          firstname: "Tên",
          type_here: "Nhập vào đây",
          surname: "Họ",
          gender: "Giới Tính",
          female: "Nữ",
          male: "Nam",
          date_of_birth: "Ngày Sinh",
          expected_age: "Tuổi Dự Kiến",
          currency: "Tiền Tệ",
          eur: "Euro",
          vnd: "Việt Nam Đồng",
          save_and_proceed: "Lưu và Tiếp Tục",

          //Starting Capital Page
          starting_capital: "Vốn Ban Đầu",

          //Assets
          activa: "Tài Sản",

          //Liquid Assets
          cash: "Tiền Mặt",
          liquid_assets: "Tài Sản Lưu Động",
          checking: "Tiền Hiện Có",
          savings: "Tiết Kiệm",
          other: "Khác",
          preciousMetals: "Kim Loại Quý",
          gold: "Vàng",

          //Real Estate
          realestate: "Bất Động Sản",
          occupied_properties: "Tài Sản Sỡ Hữu",
          rented_properties: "Tài Sản Thuê",
          commercial_properties: "Tài Sản Thương Mai",
          agricultural_land_forest: "Đất Rừng Nông Nghiệp",
          forest: "Rừng",
          agricultural_land: "Đất Nông Nghiệp",
          funds: "Quỹ",
          real_estate_funds: "Quỹ Bất Động Sản",

          //Stocks
          stocks: "Cổ Phiếu",
          single_stocks: "Cổ Phiếu Lẻ",
          stock_funds: "Quỹ Cổ Phiếu",
          fund: "Quỹ",
          etf: "ETF",
          derivative: "Phái Sinh",
          corporate_participation: "Tham Gia Doanh Nghiệp",
          active_corporate_participation: "Tham Gia Doanh Nghiệp Chủ Động",
          passive_corporate_participation: "Tham Gia Doanh Nghiệp Bị Động",

          //Cryptocurrency
          crypto_currency: "Tiền Điện Tử",
          bitcoin: "Bitcoin",
          ethereum: "Ethereum",

          //Other Assets
          other_assets: "Tài Sản Khác",
          art: "Tranh",
          collectibles: "Sưu Tầm",
          claims: "Claims",
          insurance: "Bảo Hiểm",

          //Liabilities
          passiva: "Nợ Phải Trả",
          object_related_liabilities: "Nợ Liên Quan tới Đối Tượng",
          non_object_related_liabilities: "Nợ Không Liên Quan tới Đối Tượng",
          other_liabilities: "Nợ Khác",

          //Reserved Equity
          reserved_equity: "Vốn Cổ Phần Dự Trữ",
          reserved_equity_for_consumption: "Vốn Cổ Phần Dự Trữ Tiêu Thụ",
          reserved_equity_for_pension_provision: "Vốn Cổ Phần Dự Trữ Lương Hưu",
          reserved_equity_for_other: "Vốn Cổ Phần Dự Trữ Khác",

          //Balance Sheet
          starting_capital_display: "Hiển Thị Vốn Ban Đầu",
          liabilities: "Nợ Phải Trả",
          Active: "Tài Sản",
          balance_sheet: "Bảng Cân Đối Kế Toán",
          crypto: "Crypto",
          reservedEquity: "Vốn Cổ Phần Dự Trữ",
          total_capital: "Toàn Bộ Vốn",

          //Save
          save_activa: "Lưu Tài Sản",
          save_passiva: "Lưu Nợ Phải Trả",
          save_starting_capital: "Lưu Vốn Ban Đầu",

          //Life Phases Page
          lifephases: "Giai Đoạn Cuộc Sống",
          life_phases: "Giai Đoạn Cuộc Sống",
          no_life_phases: "Số Giai Đoạn Cuộc Sống",
          new_life_phase: "Giai Đoạn Sống Mới",
          selected_lifephase: "Giai Đoạn Sống Đang Chọn",
          name_of_phase: "Tên Giai Đoạn",
          start_of_phase: "Giai Đoạn Bắt Đầu",
          end_of_phase: "Giao Đoạn Kết Thúc",
          income: "Thu Nhập",
          expenses: "Chi Phí",
          life_phase_graph: "Đồ Thị Giai Đoạn Sống",
          create_lifephases_first: "Hãy Tạo Giai Đoạn Sống Trước Tiên",
          save_proceed: "Lưu",
          cancel_clear: "Xóa",

          //Add New Life Phase
          new_lifephase: "Giai Đoạn Cuộc Sống Mới",
          //Income
          dependent: "Phụ Thuộc",
          selfemployed: "Tự Kinh Doanh",
          rentingIncome: "Thu Nhập cho Thuê",
          capitalIncome: "Thu Nhập Vốn",
          pensionIncome: "Thu Nhập Hưu Trí",
          otherIncome: "Thu Nhập Khác",
          back: "Trở Về",

          //Expenses
          taxes: "Thuế",
          rent: "Tiền Thuê",
          consumption: "Tiêu Hao",
          Insurance: "Bảo Hiểm",
          interest: "Lãi Suất",
          socialSecurity: "An Ninh Xã Hội",
          maintenance: "Bảo Trì",
          otherCosts: "Chi Phí Khác",

          //Summary
          summary: "Tóm Tắt",
          save: "Lưu",
          cancel: "Hủy Bỏ",
          all_phases_successfully_set: "Mọi Giai Đoạn đã được thiết lập",

          //Point of Freedom Page
          pof: "Điểm Tự Do Tài Chính",
          inflationrate: "Tỷ Lệ Lạm Phát",
          expectedgrowth: "Tăng Trưởng Dự Kiến",
          pof_title: "Điểm Tự Do Tài Chính",
          pof_achieved: "Điểm Tự Do Tài Chính đạt được lúc ",
          pof_achieved_age: "tuổi",
          recalculate_pof: "Tính Toán Lại Điểm Tự Do Tài Chính",

          //Custom Asset
          enter_custom_asset_allocation: "Phân Bổ Tài Sản Tùy Chỉnh",
          precious_metals: "Kim Loại Quý ",
          real_estate: "Bất Động Sản",

          income_costs: "Thu Nhập và Chi Phí",
          optimisation: "Tối Ưu Hóa",
        },
      },
    },
  })
  .then((r) => console.log(r));
export default i18n;

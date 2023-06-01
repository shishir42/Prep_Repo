import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class CSVConverter<T> {
    private Class<T> type;

    public CSVConverter(Class<T> type) {
        this.type = type;
    }

    public List<T> readCSVToList(String filePath) {
        List<T> dataList = new ArrayList<>();

        try (BufferedReader reader = new BufferedReader(new FileReader(filePath))) {
            String line;
            boolean isFirstLine = true;

            while ((line = reader.readLine()) != null) {
                if (isFirstLine) {
                    isFirstLine = false;
                    continue;
                }

                String[] row = line.split(",");
                T obj = parseRowToPOJO(row);
                dataList.add(obj);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        return dataList;
    }

    private T parseRowToPOJO(String[] row) {
        try {
            T obj = type.getDeclaredConstructor().newInstance();
            int fieldCount = Math.min(row.length, obj.getClass().getDeclaredFields().length);

            for (int i = 0; i < fieldCount; i++) {
                String fieldValue = row[i].replaceAll("\"", "").trim();
                obj.getClass().getDeclaredFields()[i].setAccessible(true);
                obj.getClass().getDeclaredFields()[i].set(obj, fieldValue);
            }

            return obj;
        } catch (Exception e) {
            e.printStackTrace();
        }

        return null;
    }

    public static void main(String[] args) {
        String inputFilePath = "/Users/shishirroy/Downloads/Prep/Prep_Repo/Java/input.csv";

        CSVConverter<WorldCheck> converter = new CSVConverter<>(WorldCheck.class);
        List<WorldCheck> worldCheckList = converter.readCSVToList(inputFilePath);

        // Print the converted Country objects
        // for (Country country : countries) {
        //     System.out.println(country);
        // }
    }
}

class WorldCheck {
    private String uID;
    private String lastName;
    private String firstName;
    private String category;

    public WorldCheck(String uID, String lastName, String firstName, String category) {
        this.uID = uID;
        this.lastName = lastName;
        this.firstName = firstName;
        this.category = category;
    }

    public String getUID() {
        return uID;
    }

    public void setUID(String uID) {
        this.uID = uID;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    @Override
    public String toString() {
        String name = firstName + "-" + lastName;
        return "WorldCheck{name='" + name + "', uID='" + uID + "'}";
    }
}


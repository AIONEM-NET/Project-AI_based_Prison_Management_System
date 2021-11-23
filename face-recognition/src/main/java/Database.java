import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;

import java.io.FileInputStream;


public class Database {

    public static String PROJECT_FOLDER = "";

    public static void main(String [] args) {

        init();

        System.out.println("--->  Init");

    }

    public static void init() {

        try {

            FileInputStream serviceAccount = new FileInputStream(PROJECT_FOLDER+"ai-based-prison-management-firebase-adminsdk-drhf9-91fb29cfd2.json");

            FirebaseOptions options = new FirebaseOptions.Builder()
                    .setCredentials(GoogleCredentials.fromStream(serviceAccount))
                    .setDatabaseUrl("https://ai-based-prison-management-default-rtdb.firebaseio.com")
                    .build();

            FirebaseApp.initializeApp(options);

        } catch (Exception e) {
            System.out.println("ERROR: invalid service account credentials.");
            System.out.println(e.getMessage());
        }

        FirebaseDatabase.getInstance().getReference("records").child("1").setValue("Test", new DatabaseReference.CompletionListener() {
            @Override
            public void onComplete(DatabaseError databaseError, DatabaseReference databaseReference) {

                System.out.println("--->"+databaseReference);

            }
        });

    }

}

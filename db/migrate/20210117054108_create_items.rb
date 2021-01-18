class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.integer :code, null: false
      t.string :name, null: false
      t.integer :vol, null: false
      t.timestamps
    end
  end
end
